import React from "react";

import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;
const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Welcome</Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Log in </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
