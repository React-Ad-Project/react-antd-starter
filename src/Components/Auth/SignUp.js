import React from "react";
import { Input, DatePicker, PageHeader } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

export const SignUp = () => {
  return (
    <div className="signupContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Sign Up"
      />
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
      </div>
    </div>
  );
};
