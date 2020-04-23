import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
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
    <div className="bottomBarMainDiv" style={{color:"black"}}>
      <Link to="/">
      <HomeOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("home");
        }}
      />
      </Link>
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
      <Link to="/profile">
      <UserOutlined
        className="iconInBottomBar"
        onClick={() => {
          setSelected("profile");
        }}
      />
      </Link>
    </div>
  );
};

export default BottomBar;
