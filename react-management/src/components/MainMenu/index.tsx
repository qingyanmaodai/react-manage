import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: string,
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
  getItem("Page3", "/page3", <UserOutlined />, [
    getItem("Page301", "/page3/page301"),
    getItem("page302", "/page3/page302"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  //获取当前路由信息
  const currentRoute = useLocation();
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
  function findOpenKeys(obj: { key: string }) {
    return obj.key === currentRoute.pathname;
  }
  useEffect(() => {
    items.map((item) => {
      if (
        item?.children &&
        item?.children.length > 0 &&
        item!.children.find(findOpenKeys)
      ) {
        setOpenKeys([item!.key]);
        return;
      }
    });
  }, []);

  return (
    <Menu
      theme="dark"
      //表示当前样式所在的选中项的key
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      //菜单项的数据
      items={items}
      //菜单点击触发事件
      onClick={menuClick}
      //菜单展开和回收事件
      onOpenChange={handleOpenChange}
      //当前菜单展开项的keys数组
      openKeys={openKeys}
    />
  );
};

export default Comp;
