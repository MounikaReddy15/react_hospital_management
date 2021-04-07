import React, { Component } from "react";

import { Form, Input, InputNumber, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleFormSubmit}>
          Add Patient
        </Button>

        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item name={["user", "name"]} label="Name">
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "symptons"]} label="Symptons">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "diagnosis"]} label="Diagnosis">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "medicines"]} label="Medicines">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Dashboard;
