import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./auth.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="frm-algn">
          <Form
            wrapperCol={{ span: 6 }}
            name="normal_login"
            className="login-form"
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
                prefix={<UserOutlined className="site-form-item-icon" />}
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
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <div className="chkbox">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </div>
              <div className="frm-link">
                <Link className="login-form-forgot" to="">
                  Forgot password
                </Link>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="lower-log">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
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
      </div>
    </div>
  );
};

export default SignIn;
