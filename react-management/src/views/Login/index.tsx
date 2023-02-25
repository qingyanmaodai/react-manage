import { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button, message } from "antd";
import styles from "./login.module.scss";
import "./login.scss";
import initLoginBg from "./init.ts";
import { CaptchaAPI, LoginAPI } from "@/request/api";
import { useNavigate } from "react-router-dom";
const View = () => {
  let navigateTo = useNavigate();
  //加载完这个组件之后
  useEffect(() => {
    initLoginBg();
    //窗口改变也进行一个初始化
    window.onresize = function () {
      initLoginBg();
    };
    getCaptchaImg();
  }, []);
  //获取用户输入信息
  const [usernameVal, setUsernameVal] = useState(""); //定义用户输入信息这个变量
  const [passwordVal, setPasswordVal] = useState(""); //定义用户输入密码这个变量
  const [captchaVal, setCaptchaVal] = useState(""); //定义用户输入验证码这个变量
  //定义一个变量保存验证码图片信息
  const [captchaImg, setCaptchaImg] = useState("");
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //获取用户输入用户名
    // console.log(e.target.value);
    //修改usernameVal这个变量为用户输入的那个值
    setUsernameVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  //点击登录按钮事件
  const goToLogin = async () => {
    console.log(
      "用户名:",
      usernameVal,
      "密码:",
      passwordVal,
      "验证码:",
      captchaVal
    );
    //验证输入框是否有空值
    if (!usernameVal.trim()) {
      message.warning("请输入用户名");
      return;
    }
    if (!passwordVal.trim()) {
      message.warning("请输入密码");
      return;
    }
    if (!captchaVal.trim()) {
      message.warning("请输入验证码");
      return;
    }
    //发起登录请求
    let loginAPIRes = await LoginAPI({
      username: usernameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem("uuid") as string,
    });
    //账号qdtest1 密码123456

    if (loginAPIRes.code === 200) {
      //登录成功，保存token，跳转page1，删除本地uuid
      message.success("登录成功!");
      localStorage.setItem("token", loginAPIRes.token);
      navigateTo("/page1");
      localStorage.removeItem("uuid");
    } else {
      message.error(loginAPIRes.msg);
    }
  };
  //点击验证码图片触发的接口
  const getCaptchaImg = async () => {
    let captchaAPIRes = await CaptchaAPI();
    if (captchaAPIRes.code == 200) {
      setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img);
      //本地储存uuid
      localStorage.setItem("uuid", captchaAPIRes.uuid);
    } else {
      message.error(captchaAPIRes.msg);
    }
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
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height="38" src={captchaImg} alt="" />
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
