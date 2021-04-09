import React, { Component } from "react";
import { Button, Radio } from "antd";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Button type="primary" className="home-button">
          <Link to="/Login"> Login as Doctor </Link>
        </Button>

        <Button type="primary" className="home-button">
          <Link to="/PatientLogin"> Login as Patient </Link>
        </Button>
      </div>
    );
  }
}

export default Home;
