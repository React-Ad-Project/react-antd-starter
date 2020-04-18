import React from "react";
import { Input, DatePicker, PageHeader, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

export const SignUp = () => {
  return (
    <div className="signupContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Sign Up"
      />
      <Input.Group size="large">
        <div className="inputContainer">
          <Input
            className="inputStyle"
            placeholder="Enter your Name"
            suffix={<UserOutlined className="site-form-item-icon" />}
          />
          <Input
            className="inputStyle"
            placeholder="Enter your Email"
            suffix={<MailOutlined />}
          />
          <DatePicker placeholder="Select your Dob" className="inputStyle" />
          <Input.Password
            className="inputStyle"
            placeholder="Enter your password"
          />
          <Input.Password
            className="inputStyle"
            placeholder="Confirm your password"
          />
          <Button className="inputStyle" type="primary">
            Sign Up!
          </Button>
        </div>
      </Input.Group>
    </div>
  );
};
