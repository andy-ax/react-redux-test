import React, { Children, Component, MouseEventHandler } from 'react';
import {Store} from 'redux';
import { Provider } from 'react-redux'
import reduxReducer from './redux/redux';
import HeaderRedux from './component/header/HeaderRedux';
import MainRedux from './component/main/MainRedux';
import TooltipRedux from './component/tooltip/TooltipRedux';
import './App.css'

class App extends Component {
    ref: React.RefObject<any>;
    store: Store;
    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
        this.store = reduxReducer.reducerInit();
    }
    componentDidMount() {
    }
    render() {
        // 包裹Provider，让所有容器组件都能获取到store
        return <Provider store={this.store}>
            <div
                id="app"
                ref={this.ref}
            >
                <HeaderRedux></HeaderRedux>
                <TooltipRedux></TooltipRedux>
                <MainRedux></MainRedux>
            </div>
        </Provider>
    }
}


export default App;
