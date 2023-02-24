import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
//兼容异步
import reduxThunk from "redux-thunk"; //rt

import NumStatusReducer from "./NumStatus/reducer";
import ArrStatusReducer from "./ArrStatus/reducer";

//组合各个模块的reducer
const reducers = combineReducers({ NumStatusReducer, ArrStatusReducer });

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 让浏览器redux-dev-tools能正常使用

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose; //rt

//创建数据仓库
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
); //rt

export default store;
