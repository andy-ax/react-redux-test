import { createStore, combineReducers, applyMiddleware, Middleware, Store } from 'redux';

const countReducer = (state: any, action: any) => {
    if (action.type === 'COUNT') {
        const data = action.data
        if (data?.countType === 'ADD') {
            return state + data.payload;
        } else if (data?.countType === 'MINUS') {
            return state - data.payload;
        } else {
            return state;
        }
    } else {
        return state || null;
    }
};

const setNameReducer = (state: any, action: any) => {
    return action?.name || null;
}

// reducer 理论上reducer应为纯函数
const reducer = combineReducers({
    'COUNT': countReducer,
    'SET_NAME': setNameReducer,
});

// middleware

// 正常的中间件
const log = (store: any) => (next: any) => (action: any) => {
    console.log(action)
    next(action);
}
// 对action进行封装的中间件，其中action为函数
const thunk = (store: any) => (next: any) => (action: any) => {
    if (action instanceof Function) {
        action(store.dispatch, store.getState);
    } else {
        next(action);
    }
}
// 对action进行封装的中间件，其中action为promise
const promise = (store: any) => (next: any) => (action: any) => {
    if (action instanceof Promise) {
        action.then(data => {
            next(data);
        });
    } else {
        next(action);
    }
}

// state
const state: any = {
    'COUNT': 1,
    'SET_NAME': 'andy',
};

// store 通过reducer保存数据 第二个值可以设置reducer初始状态 第三个值可以设置中间件
const store = createStore(reducer, state, applyMiddleware(log, thunk, promise));

// store 监听数据变化
store.subscribe(() => {
    // state 获取当前时刻的数据
    const state = store.getState();
    console.log(state);
})

// action && action creator
function addTodo(payload: number) {
    return {
        type: 'COUNT',
        data: {
            countType: 'ADD',
            payload,
        }
    }
}

const action = addTodo(10);

// dispatch 发出 action 会触发数据变更
store.dispatch(action);
store.dispatch({
    type: 'SET_NAME',
    name: 'name'
})
// 同步action
const dispathByFunc: any = (addNumber: number) => (dispatch: any, getState: any) => {
    dispatch(addTodo(addNumber));
};
// 异步action
const dispatchByPromise: any = (dispatch: any, addNumber: number) => {
    return new Promise((res, rej) => {
        wait1s().then(() => {
            dispatch(addTodo(addNumber));
            return wait1s();
        }).then(() => {
            res(addTodo(addNumber));
        })
    })
}

const wait1s = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(null);
        }, 1000)
    })
}
store.dispatch(dispathByFunc(1))
store.dispatch(dispatchByPromise(store.dispatch, 1))

export default store;