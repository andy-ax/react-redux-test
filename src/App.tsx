import React, { Children, Component, MouseEventHandler } from 'react';
import './App.css'

import { createStore, combineReducers } from 'redux';

const defaultState: any = 0;

const countReducer = (state: any, action: any) => {
    if (action.countType === 'ADD') {
        return state + action.payload;
        console.log(state)
    } else if (action.countType === 'MINUS') {
        return state - action.payload;
        console.log(state)
    }else {
        return state;
    }
};

const setNameReducer = (state: any, action: any) => {
    return action.name;
}

// reducer 理论上reducer应为纯函数
const reducer = combineReducers({
    'COUNT': countReducer,
    'SET_NAME': setNameReducer
});

// state
const state: any = {
    name: 'andy',
    count: 5,
};

// store 通过reducer保存数据 第二个值可以设置reducer初始状态
const store = createStore(reducer, state);

// store 监听数据变化
store.subscribe(() => {
    // state 获取当前时刻的数据
    const state = store.getState();
    console.log(state);
})

// action && action creator
function addTodo(payload: number) {
    return {
        type: 'ADD',
        payload,
    }
}

const action = addTodo(10);

// dispatch 发出 action 会触发数据变更
store.dispatch(action);




class App extends Component {
    ref: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }
    componentDidMount() {
    }
    render() {
        return <div
            id="app"
            ref={this.ref}
        ></div>
    }
}


export default App;
