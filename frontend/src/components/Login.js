import React, { Component } from "react";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Login extends Component {
  render() {
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter Email"
          prefix={<UserOutlined />}
        />
        <Button type="primary">Log In</Button>
      </div>
    );
  }
}

export default Login;
