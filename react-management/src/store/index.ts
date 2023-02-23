import { legacy_createStore, combineReducers } from "redux";
import NumStatusReducer from "./NumStatus/reducer";
import ArrStatusReducer from "./ArrStatus/reducer";

//组合各个模块的reducer
const reducers = combineReducers({ NumStatusReducer, ArrStatusReducer });

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 让浏览器redux-dev-tools能正常使用
//创建数据仓库
const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
