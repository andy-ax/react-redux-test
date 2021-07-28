import { createStore, combineReducers, ReducersMapObject, applyMiddleware, Middleware, Store, Action } from 'redux';
import {log, thunk, promise} from './middleware';
type listenListType = {
    [key: string]: Function[];
}
class ReduxReducer {
    reducerMap: ReducersMapObject = {};
    defaultStateMap: any = {};
    store!: Store;
    middlewareList: Middleware[] = [];

    // 新增reducer
    addReducer(name: string, defaultState: any, reducer: Function) {
        this.reducerMap[name] = (state: any, action: any) => {
            if (action.type === name) {
                const result = reducer(state, action.data);
                if (result === undefined) {
                    return state || null;
                } else {
                    return result;
                }
            } else {
                return state || null;
            }
        };
        this.defaultStateMap[name] = defaultState;
    }

    /**
     * 实现撤销与重做功能
     * @param reducerFunction reducer函数
     * @returns 
     */
     undoable(reducerFunction: Function) {
        //用一个空的action来调用reducer来产生初始的state;
        const initialState = {
            past: [],
            present: reducerFunction(undefined, {}),
            future: []
        };
    
        //返回一个可以执行撤销和重做的新的reducer
    
        return function (state = initialState, action: Action) {
            const {past, present, future} = state;
    
            switch (action.type) {
                case "UNDO":
                    const previous = past[past.length - 1];
                    const newPast = past.slice(0, past.length - 1);
                    return {
                        past: newPast,
                        present: previous,
                        future: [present, ...future]
                    };
                case"REDO":
                    const next = future[0];
                    const newFuture = future.slice(1);
                    return {
                        past: [...past, present],
                        present: next,
                        future: newFuture
                    };
                default:
                    //将其他action委托给原始的reducer处理
                    const newPresent = reducerFunction(present, action);
                    if (present === newPresent) {
                        return state;
                    }
                    return {
                        past: [...past, present],
                        present: newPresent,
                        future: []
                    };
            }
        }
    }

    /**
     * reducer复用
     * @param reducerFunction 需要复用的reducer
     * @param reducerName reducer命名空间
     * @param key reducer命名空间在action中的key值
     * @param reducerFilter reducer筛选,符合条件才会执行reducer
     * @returns 
     */
    createNamedWrapperReducer(reducerFunction: Function, reducerName: string, key: string = 'name', reducerFilter?: Function) {
        return (state: any, action: Action): void => {
            const name = (action as any)[key];
            const isInitializationCall = state === undefined;
            if (name !== reducerName && !isInitializationCall) {
                return state;
            } else if (reducerFilter && !reducerFilter(state, action)) {
                return state;
            }

            return reducerFunction(state, action);
        };
    }

    // 添加中间件
    addMiddleware(middleware: Middleware) {
        this.middlewareList.push(middleware);
    }

    reducerInit(): Store {
        this.addMiddleware(log);
        this.addMiddleware(thunk);
        this.addMiddleware(promise);
        const reducer = combineReducers(this.reducerMap);
        this.store = createStore(
            reducer,
            this.defaultStateMap,
            applyMiddleware(...this.middlewareList)
        );
        return this.store
    }

    listenList: listenListType = {};

    addDataDispatch(action: any) {
        console.log('addDataDispatch', action)
        this.store.dispatch(action);
    }
    addFuncDispatch(func: Function) {
        const dispatch: any = this.store.dispatch;
        dispatch(func);
    }
    addPromiseDispatch(promise: Promise<any>) {
        const dispatch: any = this.store.dispatch;
        dispatch(promise);
    }
    addListen(type: string, listen: Function) {
        if (!this.listenList[type]) {
            this.listenList[type] = [];
        }
        this.listenList[type].push(listen);
    }
    startListen() {
        this.store.subscribe(() => {
            const state = this.store.getState();
            if (this.listenList[state]) {
                const item = this.listenList[state];
                item.forEach(func => {
                    func(state)
                });
            }
        })
    }
}

const reduxReducer = new ReduxReducer();

export default reduxReducer;

// const countReducer = (state: any, data: any) => {
//     if (data?.countType === 'ADD') {
//         return state + data.payload;
//     } else if (data?.countType === 'MINUS') {
//         return state - data.payload;
//     } else if (data?.countType === 'CHANGE') {
//         return data.payload;
//     }
// };

// addReducer('COUNT', 1, countReducer);

// const setNameReducer = (state: any, action: any) => {
//     return action?.name || null;
// }

// reducer 理论上reducer应为纯函数
// const reducer = combineReducers(reducerMap);
// state
// const state: any = {
//     'COUNT': 1,
//     'SET_NAME': 'andy',
// };

// store 通过reducer保存数据 第二个值可以设置reducer初始状态 第三个值可以设置中间件
// const store = createStore(reducer, defaultStateMap, applyMiddleware(log, thunk, promise));

// store 监听数据变化
// store.subscribe(() => {
//     // state 获取当前时刻的数据
//     const state = store.getState();
//     console.log(state);
// })

// action && action creator
// function addTodo(payload: number) {
//     return {
//         type: 'COUNT',
//         data: {
//             countType: 'ADD',
//             payload,
//         }
//     }
// }

// const action = addTodo(10);

// dispatch 发出 action 会触发数据变更
// store.dispatch(action);
// store.dispatch({
//     type: 'SET_NAME',
//     name: 'name'
// })
// 同步action
// const dispathByFunc: any = (addNumber: number) => (dispatch: any, getState: any) => {
//     dispatch(addTodo(addNumber));
// };
// // 异步action
// const dispatchByPromise: any = (dispatch: any, addNumber: number) => {
//     return new Promise((res, rej) => {
//         wait1s().then(() => {
//             dispatch(addTodo(addNumber));
//             return wait1s();
//         }).then(() => {
//             res(addTodo(addNumber));
//         })
//     })
// }

// const wait1s = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(null);
//         }, 1000)
//     })
// }
// store.dispatch(dispathByFunc(1))
// store.dispatch(dispatchByPromise(store.dispatch, 1))

// export default store;