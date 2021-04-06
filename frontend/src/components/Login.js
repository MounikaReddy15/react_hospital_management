import React, { Component } from "react";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email) {
      // we can dispatch start login action here also
      //   this.props.dispatch(login(email));
    }
  };

  render() {
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter Email"
          prefix={<UserOutlined />}
          onChange={this.handleEmailChange}
          value={this.state.email}
        />
        <Button type="primary">Log In</Button>
      </div>
    );
  }
}

export default Login;
