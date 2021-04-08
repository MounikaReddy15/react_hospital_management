import React, { Component } from "react";
import { connect } from "react-redux";
import nextId from "react-id-generator";
import { Form, Input, Button } from "antd";
import { addDetails } from "../actions/auth";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

// const validateMessages = {
//   types: {
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      phone: "",
      pincode: "",
      id: "",
      symptons: "",
      diagnosis: "",
      medicines: "",
    };
  }
  // htmlId = nextId();

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("id", nextId());
    // const iden = nextId();
    this.setState({
      id: nextId(),
    });
    const {
      first_name,
      last_name,
      phone,
      pincode,
      medicines,
      symptons,
      diagnosis,
      id,
    } = this.state;
    if (
      (first_name, last_name, phone, pincode, medicines, symptons, diagnosis)
    ) {
      // we can dispatch start login action here also
      console.log("hello");
      this.props.dispatch(
        addDetails(
          first_name,
          last_name,
          phone,
          pincode,
          medicines,
          symptons,
          diagnosis,
          id
        )
      );
    }
  };
  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.handleFormSubmit}>
          Add Patient
        </Button> */}

        <Form
          {...layout}
          name="nest-messages"
          // validateMessages={validateMessages}
        >
          <Form.Item name={["user", "first_name"]} label="First Name">
            <Input
              onChange={(e) =>
                this.handleInputChange("first_name", e.target.value)
              }
            />
          </Form.Item>
          <Form.Item name={["user", "last_name"]} label="Last Name">
            <Input
              onChange={(e) =>
                this.handleInputChange("last_name", e.target.value)
              }
            />
          </Form.Item>

          <Form.Item
            name={["user", "phone"]}
            label="Contact Number"
            // rules={[
            //   {
            //     type: "number",
            //     min: 1,
            //     max: 99,
            //   },
            // ]}
          >
            <Input
              onChange={(e) => this.handleInputChange("phone", e.target.value)}
            />
          </Form.Item>

          <Form.Item name={["user", "pincode"]} label="Pin Code">
            <Input
              onChange={(e) =>
                this.handleInputChange("pincode", e.target.value)
              }
            />
          </Form.Item>
          <Form.Item name={["user", "symptons"]} label="Symptons">
            <Input
              onChange={(e) =>
                this.handleInputChange("symptons", e.target.value)
              }
            />
          </Form.Item>
          <Form.Item name={["user", "diagnosis"]} label="Diagnosis">
            <Input
              onChange={(e) =>
                this.handleInputChange("diagnosis", e.target.value)
              }
            />
          </Form.Item>
          <Form.Item name={["user", "medicines"]} label="Medicines">
            <Input
              onChange={(e) =>
                this.handleInputChange("medicines", e.target.value)
              }
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            htmlFor={this.htmlId}
          >
            <Button
              type="primary"
              onClick={this.handleFormSubmit}
              // onClick={(e) => this.handleFormSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AddPatient);
