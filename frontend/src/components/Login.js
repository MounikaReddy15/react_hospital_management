import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { clearAuthState, login } from "../actions/auth";
import { Link } from "react-router-dom";

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
      console.log("hello");
      this.props.dispatch(login(email));
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
        <Button type="primary" onClick={this.handleFormSubmit}>
          <Link to="/Dashboard">Log In </Link>
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
