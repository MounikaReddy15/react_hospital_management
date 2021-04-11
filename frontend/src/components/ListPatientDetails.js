import React, { Component } from "react";
import { connect } from "react-redux";
import { listPatientDetails } from "../actions/patients";
import { Table, Tag, Space } from "antd";

class ListPatientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }
  async componentDidMount() {
    console.log("id", this.state.id);
    this.props.dispatch(listPatientDetails(this.state.id));
  }

  deleteDetails = () => {};

  render() {
    const { error, loading, patient } = this.props.details;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    const data = [
      {
        first_name: patient.first_name,
        last_name: patient.last_name,
        phone: patient.phone,
        pincode: patient.pincode,
        key: patient.id,
        symptons: patient.symptons,
        diagnosis: patient.diagnosis,
        medicines: patient.medicines,
      },
    ];

    const columns = [
      {
        title: "First Name",
        dataIndex: "first_name",
        key: "first_name",
      },
      {
        title: "Last Name",
        dataIndex: "last_name",
        key: "last_name",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Pincode",
        dataIndex: "pincode",
        key: "pincode",
      },
      {
        title: "Symptons",
        dataIndex: "symptons",
        key: "symptons",
      },
      {
        title: "Diagnosis",
        dataIndex: "diagnosis",
        key: "diagnosis",
      },
      {
        title: "Medicines",
        dataIndex: "medicines",
        key: "medicines",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <a onClick={this.deleteDetails()}>Delete</a>
          </Space>
        ),
      },
    ];

    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    patients: state.patients,
    details: state.details,
  };
}

export default connect(mapStateToProps)(ListPatientDetails);
