import React, { Children, Component, MouseEventHandler } from 'react';
import { Provider } from 'react-redux'
import store from './redux/redux';
import TestRedux from './component/testRedux';
import './App.css'

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
        // 包裹Provider，让所有容器组件都能获取到store
        return <Provider store={store}>
            <div
                id="app"
                ref={this.ref}
            >
                <TestRedux></TestRedux>
            </div>
        </Provider>
    }
}


export default App;
