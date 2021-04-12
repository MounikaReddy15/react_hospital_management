import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Input, Space } from "antd";
// import { AudioOutlined } from "@ant-design/icons";
import { logoutUser } from "../actions/auth";
const { Header } = Layout;
const { Search } = Input;

const isAdmin = localStorage.getItem("isAdmin");
console.log("isAdmin", isAdmin);
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  componentDidMount() {}
  logoutUser = () => {
    this.props.dispatch(logoutUser());
    this.setState = {
      age: this.state.age + 1,
    };
  };
  render() {
    const { auth } = this.props;
    console.log("auth", auth);
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              {!isAdmin && <Menu.Item key="1">Welcome</Menu.Item>}
              {auth.isLoggedin && (
                <Menu.Item key="2">
                  <Link to="/">Log Out </Link>
                </Menu.Item>
              )}
              {isAdmin && (
                <Menu.Item key="3">
                  <Link to="/AddPatient">Add Patient</Link>
                </Menu.Item>
              )}
              {isAdmin && (
                <Menu.Item key="4">
                  <Link to="/Dashboard">Dashboard</Link>
                </Menu.Item>
              )}
              {isAdmin && (
                <Menu.Item key="5">
                  <Link to="/" onClick={this.logoutUser}>
                    Logout
                  </Link>
                </Menu.Item>
              )}
              {isAdmin && (
                <Space direction="vertical">
                  <Search
                    className="search-bar"
                    placeholder="Search by Name Symptoms Medicines"
                    // onSearch={onSearch}

                    enterButton
                  />
                </Space>
              )}
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
