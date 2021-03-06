import React from "react";
import { Link } from "react-router-dom";
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
  PhoneOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Profile = ({history}) => {
  return (
    <div className="customContainer">
      <PageHeader
        className="site-page-header"
        onBack={() =>{history.goBack()} }
        title="Profile"
        extra={[
          <Link to="/profile/edit">
            <Button
              // type="primary"
              shape="circle"
              icon={<EditOutlined />}
              size="large"
            ></Button>
          </Link>,
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
        <div className="name-text">
          <h1>User Name</h1>
          <Button
            type="primary"
            shape="circle"
            className="btn-wishlist"
            icon={<PhoneOutlined rotate="90" />}
            size="small"
          />{" "}
          +91 9188692836
        </div>

        <div className="nav-links">
          <Button
            type="primary"
            className="inputStyle nav-btn"
            icon={<HeartOutlined />}
            size="middle"
          >
            Wishlist
          </Button>
          <Link to="/post">
          <Button
            type="primary"
            className=" inputStyle nav-btn"
            icon={<PlusOutlined />}
            size="middle"
          >
            Add Post{" "}
          </Button>
          </Link>

          <Button
            type="primary"
            className="nav-btn inputStyle"
            icon={<BookOutlined />}
            size="middle"
          >
            Your Posts
          </Button>
          <Button
            type="primary"
            className="nav-btn inputStyle"
            icon={<ExclamationCircleOutlined />}
            size="middle"
          >
            FAQs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
