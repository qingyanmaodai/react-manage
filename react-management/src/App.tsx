import { useState, useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import { message } from "antd";
function ToPage1() {
  const navigateTo = useNavigate();
  useEffect(() => {
    //加载完组件之后执行这里的代码
    navigateTo("/page1");
    message.warning("您已经登录过了");
  }, []);
  return <div></div>;
}
function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    //加载完组件之后执行这里的代码
    navigateTo("/login");
    message.warning("您还没有登录，请登录后再访问");
  }, []);
  return <div></div>;
}
function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  // 后台管理系统两种经典的跳转情况:
  // 1、如果访问的是登录页面,并且有token,跳转到首页
  // 2、如果访问的不是登录页面,并且没有token,跳转到登录页
  // 3、其余的都可以正常放行
  const location = useLocation();
  let token = localStorage.getItem("token");
  //1、
  if (location.pathname === "/login" && token) {
    //这里不能直接使用useNavigate来跳转，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToPage1 />;
  }
  if (location.pathname !== "/page1" && !token) {
    //这里不能直接使用useNavigate来跳转，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <BeforeRouterEnter></BeforeRouterEnter>;
    </div>
  );
}

export default App;
