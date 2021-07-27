import { connect } from 'react-redux'
import Header from './HeaderUI';
import rdc from '../../redux/redux';

const REDUX_NAME = 'COUNT';
const LIST_NAME = 'TODOLIST';

// state变化时触发 ownProps为容器组件的props
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        data: state[REDUX_NAME],
    }
}

// 绑定方法来触发dispatch
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    countType: 'ADD',
                    payload: 1,
                }
            });
        },
        onChange: (e: any) => {
            debugger
            let value: any = parseFloat(e.nativeEvent.data);
            value = value !== value ? '' : value;
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    countType: 'CHANGE',
                    payload: value,
                }
            });
        },
        onEnter: (value: any) => {
            rdc.addDataDispatch({
                type: LIST_NAME,
                data: {
                    countType: 'ADD',
                    value,
                }
            });
        }
    };
}

const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

const countReducer = (state: any, data: any) => {
    if (data?.countType === 'CHANGE') {
        return data.payload;
    } else if (data?.countType === 'DELETE') {
        return '';
    }
};

rdc.addReducer(REDUX_NAME, 1, countReducer);

export default HeaderRedux;