import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Space, Button } from "antd";
import { patientlogin } from "../actions/auth";
import { Link } from "react-router-dom";
import PatientDetails from "./ListPatientDetails";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

class PatientLogin extends Component {
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

  handlePasswordChange = (e) => {
    console.log("pass", e.target.value);
    this.setState({
      password: e.target.value,
    });
    // }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(patientlogin(email));
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

        <Input.Password
          size="large"
          defaultValue="healthcare"
          placeholder="Enter Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Button type="primary" onClick={this.handleFormSubmit}>
          <Link to="/PatientDetails">Log In </Link>
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

export default connect(mapStateToProps)(PatientLogin);
