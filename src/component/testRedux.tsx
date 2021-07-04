import { connect } from 'react-redux'
import Test from './testUI';

// state变化时触发 ownProps为容器组件的props
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        data: state,
    }
}

// 绑定方法来触发dispatch
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch({
                type: 'COUNT',
                data: {
                    countType: 'ADD',
                    payload: 1,
                }
            });
        }
    };
}

const TestRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

export default TestRedux;