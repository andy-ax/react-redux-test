import React, { Children, Component, MouseEventHandler } from 'react';
import { count } from 'console';
import classNames from 'classnames'

import logo from './logo.svg';
import './App.css'
// css module 
import style from './test.module.css'
import scssStyle from './testCSS.module.scss';
import { EventEmitter } from 'events';
import ReactDOM from 'react-dom' 
import routes from './routers/index'

class App extends Component {
    ref: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }
    componentDidMount() {
        // 载入路由
        ReactDOM.render(routes, this.ref.current);
    }
    render() {
        return <div 
            id="app" 
            ref={this.ref}
        ></div>
    }
}


export default App;
