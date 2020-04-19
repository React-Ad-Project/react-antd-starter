import React, { useState, useEffect } from "react";
import "./index.css";
import {
  HomeOutlined,
  BookOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";

const BottomBar = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div className="bottomBarMainDiv">
      <HomeOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("home");
        }}
      />
      <BookOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("saved");
        }}
      />
      <BellOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("notifications");
        }}
      />
      <UserOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("profile");
        }}
      />
    </div>
  );
};

export default BottomBar;
