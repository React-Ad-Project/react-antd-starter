import React from "react";
import { Input, PageHeader, Button, Form, InputNumber } from "antd";

export const SignUp = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="customContainer">
      <PageHeader className="site-page-header" title="Sign Up" />
      <Form
        className="signUpformContainer"
        name="nest-messages"
        onFinish={onFinish}
      >
        <Form.Item
          name={["user", "name"]}
          rules={[
            {
              required: true,
              message: "Pease enter your name",
            },
          ]}
        >
          <Input placeholder="Name" className="inputStyle" />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input valid email!",
            },
          ]}
        >
          <Input placeholder="Email" className="inputStyle" />
        </Form.Item>

        <Form.Item
          name={["user", "phone"]}
          rules={[
            {
              pattern: RegExp(/^\d{10}$/),
              required: true,
              message: "Please enter 10 digit phone!",
            },
          ]}
        >
          <Input placeholder="Phone" className="inputStyle" />
        </Form.Item>

        <Form.Item
          name={["user", "age"]}
          rules={[
            {
              type: "number",
              required: true,
              message: "Please enter your age!",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber placeholder="Age" className="inputStyle" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="inputStyle">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
