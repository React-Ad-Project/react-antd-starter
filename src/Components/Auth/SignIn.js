import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./auth.css";
import { Form, Input, PageHeader, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="customContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Sign In"
      />
      <Form
        size="small"
        name="normal_login"
        className="login-form signUpformContainer"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={
              <UserOutlined className=" inputStyle site-form-item-icon" />
            }
            // style={{ borderRadius: 10 }}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon inputStyle" />}
            // style={{ borderRadius: 10 }}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </div>
          <br />
          <div>
            <Link className="login-form-forgot algnForgot" to="">
              Forgot password
            </Link>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="lower-log">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button inputStyle"
            >
              Log in
            </Button>
          </div>
          <br />
          <div className="lower-link">
            Or <Link to="">register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
