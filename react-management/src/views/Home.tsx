import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/page1", <PieChartOutlined />),
  getItem("Option 2", "/page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuClick = (e: { key: string }) => {
    //点击跳转到对应的路由 编程式导航跳转，利用到hook
    navigateTo(e.key);
  };
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const handleOpenChange = (keys: string[]) => {
    // console.log(keys);
    //keys是一个数组，记录了当前哪一项是展开的(用key来记录)
    //展开和回收某项菜单的时候执行这里面的代码
    // 把这个数组修改成最后一项，因为只要一项是展开的,keys是记录所有菜单的展开项，数组最后加进来的就是最后一项,length-1就是最后一项
    setOpenKeys([keys[keys.length - 1]]);
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
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
          //菜单展开和回收事件
          onOpenChange={handleOpenChange}
          //当前菜单展开项的keys数组
          openKeys={openKeys}
        />
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header style={{ paddingLeft: "16px", background: colorBgContainer }}>
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
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
