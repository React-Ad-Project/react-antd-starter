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
    <div className="bottomBarMainDiv" >
      <Link to="/">
      <HomeOutlined
        className="iconInBottomBar"
        style={{color:"black"}}
        onClick={() => {
          setSelected("home");
          
        }}
      />
      </Link>
      <BookOutlined
        style={{color:"black"}}
        className="iconInBottomBar"
        onClick={() => {
          setSelected("saved");
        }}
      />
      <BellOutlined
        style={{color:"black"}}
        className="iconInBottomBar"
        onClick={() => {
          setSelected("notifications");
        }}
      />
      <Link to="/profile">
      <UserOutlined
        style={{color:"black"}}
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
