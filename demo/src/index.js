// 导入React
import React from 'react';
// 导入ReactDOM
import ReactDOM from 'react-dom/client';
// 导入全局样式
import './index.css';
// 导入根组件
import App from './App';
// import reportWebVitals from './reportWebVitals';
// 创建ReactDOM容器
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将App组件挂载页面
// <React.StrictMode>表示严格模式
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
