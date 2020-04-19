import React from "react";
import { Input, DatePicker, PageHeader, Button, Form, InputNumber } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

export const SignUp = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="signupContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Sign Up"
      />
      <Form className="formContainer" name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["user", "name"]}
          rules={[
            {
              required: true,
              message: "Pease enter your name"
            }
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
              message: "Please input valid email!"
            }
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
              message: "Please enter 10 digit phone!"
            }
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
              max: 99
            }
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
    // <div className="signupContainer">
    //   <PageHeader
    //     className="site-page-header"
    //     onBack={() => null}
    //     title="Sign Up"
    //   />

    //   <div className="inputContainer">
    //     <Input
    //       className="inputStyle"
    //       placeholder="Enter your Name"
    //       suffix={<UserOutlined className="site-form-item-icon" />}
    //     />
    //     <Input
    //       className="inputStyle"
    //       placeholder="Enter your Email"
    //       suffix={<MailOutlined />}
    //     />
    //     <DatePicker placeholder="Select your Dob" className="inputStyle" />
    //     <Input.Password
    //       className="inputStyle"
    //       placeholder="Enter your password"
    //     />
    //     <Input.Password
    //       className="inputStyle"
    //       placeholder="Confirm your password"
    //     />
    //     <Button className="inputStyle" type="primary">
    //       Sign Up!
    //     </Button>
    //   </div>
    // </div>
  );
};
