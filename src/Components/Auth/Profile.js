import React from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { Avatar, PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  HeartOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Profile = () => {
  return (
    <div className="customContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Profile"
        extra={[
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size="large"
          />,
        ]}
      />

      <div className="userContainer">
        <Avatar
          size={100}
          src=""
          alt="profile-Image"
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
        <h1 className="name-text">User Name</h1>
      </div>
      <div className="nav-links">
        <Button
          type="primary"
          shape="circle"
          className="btn-wishlist"
          icon={<HeartOutlined />}
          size="large"
        />
        <Button
          type="primary"
          shape="circle"
          className="add-btn"
          icon={<PlusOutlined />}
          size="large"
        />

        <Button
          type="primary"
          shape="circle"
          className="btn-wishlist"
          icon={<BookOutlined />}
          size="large"
        />
      </div>
    </div>
  );
};

export default Profile;
