import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };
  }
  async componentDidMount() {
    const fetchData = await fetch("http://localhost:7000/patients");
    const patientsData = await fetchData.json();
    this.setState({
      patients: patientsData,
    });
  }
  render() {
    const { patients } = this.state;
    console.log("patient", patients);
    return (
      <div>
        {patients.map((patient) => {
          console.log("patient", patient);
          return (
            <Link to="/PatientDetails">
              <h1 key={patient.id}>{patient.first_name}</h1>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
