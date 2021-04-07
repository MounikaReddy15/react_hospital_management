import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    console.log("auth", auth);
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Welcome</Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Log in </Link>
              </Menu.Item>
              {auth.isLoggedin && <Menu.Item key="3">Log out</Menu.Item>}
            </Menu>
          </Header>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
