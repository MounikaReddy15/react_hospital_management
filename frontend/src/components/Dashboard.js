import React, { Component } from "react";
import { Link } from "react-router-dom";
import PatientDetails from "./ListPatientDetails";
import { connect } from "react-redux";
import { fetchPatients } from "../actions/patients";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };
  }
  async componentDidMount() {
    this.props.dispatch(fetchPatients());
  }

  patientDetails = (patient) => {
    console.log("clicked");
    console.log("patient", patient);
    <PatientDetails patient={patient} />;
  };

  render() {
    const { error, loading, patients } = this.props.patients;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {patients.map((patient) => (
          // <h2 key={patient.id}>{patient.first_name}</h2>
          <li key={patient.id}>
            <Link
              to={`/patient/${patient.id}`}
              // onClick={this.patientDetails(patient)}
            >
              {patient.first_name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    patients: state.patients,
  };
}

export default connect(mapStateToProps)(Dashboard);
