import { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button } from "antd";
import styles from "./login.module.scss";
import "./login.scss";
import initLoginBg from "./init.ts";
const View = () => {
  //加载完这个组件之后
  useEffect(() => {
    initLoginBg();
    //窗口改变也进行一个初始化
    window.onresize = function () {};
  }, []);
  //获取用户输入信息
  const [usernameVal, setUsernameVal] = useState(""); //定义用户输入信息这个变量
  const [passwordVal, setPasswordVal] = useState(""); //定义用户输入密码这个变量
  const [captchaVal, setCaptchaVal] = useState(""); //定义用户输入验证码这个变量
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //获取用户输入用户名
    // console.log(e.target.value);
    //修改usernameVal这个变量为用户输入的那个值
    setUsernameVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  //点击登录按钮事件
  const goToLogin = () => {
    console.log(
      "用户名:",
      usernameVal,
      "密码:",
      passwordVal,
      "验证码:",
      captchaVal
    );
  };
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + " loginBox"}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端学习&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img
                  height="38"
                  src="https://himg.bdimg.com/sys/portraitn/item/public.1.eeb517fb.Nz-Wzi3poZKGqcKx7g1FqA"
                  alt=""
                />
              </div>
            </div>
            <Button
              type="primary"
              className="loginButton"
              onClick={goToLogin}
              block
            >
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default View;
