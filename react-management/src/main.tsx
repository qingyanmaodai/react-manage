import React from "react";
import ReactDOM from "react-dom/client";
// 正确的引入样式
// 样式初始化一般放在最前面
import "reset-css";
// UI框架的样式
//全局样式
import "@/assets/styles/global.scss";
// 组件的样式
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//状态管理
import { Provider } from "react-redux";
import store from "@/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //开启了严格模式开发环境log会执行两次，发布环境则不会
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
