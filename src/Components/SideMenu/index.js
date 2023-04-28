import React from 'react'
import ReactDOM from 'react-dom'

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  ApartmentOutlined,
  DatabaseOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Courses",
            key: "/Courses",
            icon:<ApartmentOutlined />,

          },
          {
            label: "Database",
            key: "/database",
            icon: <DatabaseOutlined />,

          },
          {
            label: "Settings",
            key: "/settings",
            icon: <MenuOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
