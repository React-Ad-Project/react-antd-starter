import React, { useState } from "react";
import {
  Avatar,
  Button,
  Input,
  Form,
  InputNumber,
  Upload,
  message,
  PageHeader,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export const ProfileEdit = () => {
  const [imageUrl, changeImage] = useState();
  const [uploading, changeStatus] = useState(false);
  const [details, changeDetails] = useState({
    name: "Shibili",
    email: "shibili@gmail.com",
    phone: "8606232343",
    age: 23,
  });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      changeStatus(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        changeImage(imageUrl);
        changeStatus(true);
      });
    }
  };

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="customContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Edit Profile"
      />
      <Form className="signUpformContainer" name="nest-messages">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader customAvatarUpload"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <Avatar size={100} src={imageUrl} /> : uploadButton}
        </Upload>

        <Form.Item
          name={["user", "name"]}
          rules={[
            {
              required: true,
              message: "Pease enter your name",
            },
          ]}
          valuePropName="name"
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
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
