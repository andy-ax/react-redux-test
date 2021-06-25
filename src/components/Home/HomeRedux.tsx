import { combineReducers } from 'redux';
// 引入 reducer 及 actionCreator 
import list from './PreviewListRedux';
export default combineReducers({
    list,
});
export * as listAction from './PreviewListRedux';