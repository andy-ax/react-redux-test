import React, { Children, Component, MouseEventHandler, useState, useContext, useEffect, useReducer  } from 'react';
import {Store} from 'redux';
import { Provider } from 'react-redux'
import reduxReducer from './redux/redux';
import HeaderRedux from './component/header/HeaderRedux';
import MainRedux from './component/main/MainRedux';
import TooltipRedux from './component/tooltip/TooltipRedux';
import './App.css'

const AddCount = () => {
	const [count, setCount] = useState(0);
	const addcount = () => {
		setCount(() => (count + 1));
	};
	const AppContext = React.createContext({});
	function TestChild() {
		const value: any = useContext(AppContext);
		return <div>Child1-value: {value.count}</div>;
	}
    // useEffect将有副作用的函数提出去，参数二为判断函数是否触发，如果不设置，则所有数据变革时都会触发，如果为[null]则只执行一次
    useEffect(() => {
        getData().then((data: any) => {
            setCount(() => data);
        })
    }, [null])
	return (
		<div>
			<p>{count}</p>
			<button onClick={addcount}>count++</button>
			<AppContext.Provider value={{count}}>
				<TestChild></TestChild>
			</AppContext.Provider>
		</div>
	);
};

const getData = (): Promise<any> => {
    return new Promise(res => {
        setTimeout(() => {
            res(1);
        })
    })
}

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
                <AddCount></AddCount>
            </div>
        </Provider>
    }
}


export default App;
