import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { patientlogin } from "../actions/patients";
import { Link } from "react-router-dom";
// import ListPatientDetails from "./ListPatientDetails";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

class PatientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      username: e.target.value,
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

    const { username } = this.state;
    if (username) {
      this.props.dispatch(patientlogin(username));
    }
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter Username"
          prefix={<UserOutlined />}
          onChange={this.handleNameChange}
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
          <Link to={`/patients?q=${username}`}>Log In </Link>
          {/* Log In */}
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
