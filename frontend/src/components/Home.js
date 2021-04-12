import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  componentDidMount() {
    this.setState = {
      age: this.state.age + 1,
    };
  }
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
