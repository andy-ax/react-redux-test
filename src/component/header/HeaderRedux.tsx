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
                    dataType: 'ADD',
                    payload: 1,
                }
            });
        },
        onChange: (e: any) => {
            let value: any = e.currentTarget.value;
            value = value || '';
            rdc.addDataDispatch({
                type: REDUX_NAME,
                data: {
                    dataType: 'CHANGE',
                    payload: value,
                }
            });
        },
        onEnter: (e: any) => {
            const value = e.currentTarget.value
            if (value !== '') {
                rdc.addDataDispatch({
                    type: LIST_NAME,
                    data: {
                        dataType: 'ADD',
                        value,
                        
                    }
                });
                rdc.addDataDispatch({
                    type: REDUX_NAME,
                    data: {
                        dataType: 'CHANGE',
                        payload: '',
                    }
                })
            }
        }
    };
}

const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

const countReducer = (state: any, data: any) => {
    if (data?.dataType === 'CHANGE') {
        return data.payload;
    } else if (data?.dataType === 'DELETE') {
        return '';
    }
};

rdc.addReducer(REDUX_NAME, 1, countReducer);

export default HeaderRedux;