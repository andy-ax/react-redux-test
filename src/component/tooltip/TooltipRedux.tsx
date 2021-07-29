import { connect } from 'react-redux'
import Tooltip from './TooltipUI';
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
        allCompleted: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'ALL_COMPLETED',
                }
            })
        },
        allWait: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'ALL_WAIT',
                }
            })
        },
        deleteInvalid: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'DELETE_INVALID',
                }
            })
        },
        deleteAll: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'DELETE_ALL',
                }
            })
        },
        setAllInvalid: () => {
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'SET_ALL_INVALID',
                }
            })
        },
    };
}

const TooltipRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tooltip);

export default TooltipRedux;