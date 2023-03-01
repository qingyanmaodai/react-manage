import React, { useState } from "react";
import { Breadcrumb, Layout, theme, Button } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";
const { Header, Content, Footer, Sider } = Layout;
import { useNavigate } from "react-router-dom";

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const LeaveLogin = () => {
    localStorage.removeItem("token");
    navigateTo("/login");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header
          style={{
            padding: " 0 16px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Button type="primary" size="middle" onClick={LeaveLogin}>
              退出登录
            </Button>
          </div>
        </Header>
        {/* 右边内容部分-白色 */}
        <Content
          style={{ margin: "16px 16px 0", backgroundColor: colorBgContainer }}
        >
          {/* 窗口部分 */}
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer
          style={{ textAlign: "center", padding: "0", lineHeight: "48px" }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
