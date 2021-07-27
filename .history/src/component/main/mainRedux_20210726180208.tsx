import { connect } from 'react-redux'
import Main from './MainUI';
import rdc from '../../redux/redux';

const REDUX_NAME = 'TODOLIST'

// state变化时触发 ownProps为容器组件的props
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        data: state[REDUX_NAME],
    }
}

// 绑定方法来触发dispatch
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        // onClick: () => {
        //     rdc.addDataDispatch({
        //         type: 'COUNT',
        //         data: {
        //             countType: 'ADD',
        //             payload: 1,
        //         }
        //     });
        // },
        // onChange: (e: any) => {
        //     let value: any = parseFloat(e.nativeEvent.data);
        //     value = value !== value ? '' : value;
        //     rdc.addDataDispatch({
        //         type: 'COUNT',
        //         data: {
        //             countType: 'CHANGE',
        //             payload: value,
        //         }
        //     });
        // }
    };
}

const MainRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

const countReducer = (state: any, data: any) => {
    if (data?.countType === 'ADD') {
        state[data.index] = {
            status: 'wait',
            text: data.value
        }
        return state;
    }
};

rdc.addReducer(REDUX_NAME, [
    {
        status: 'wait',
        text: '1111',
    },
    {
        status: 'completed',
        text: '2222',
    },
    {
        status: 'invalid',
        text: '3333',
    }
], countReducer);

export default MainRedux;