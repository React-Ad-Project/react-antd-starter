import React, { useState } from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { PageHeader, Input, Button, Affix } from "antd";
import OfferViewCard from "./components/OfferViewCard";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";
import {Link}  from 'react-router-dom'

const OfferView = ({history}) => {
  const offers = [
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: " https://wallpaperaccess.com/full/767046.jpg",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: " https://wallpaperaccess.com/full/767046.jpg",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
  ];

  return (
    <div className="offerContainer">
      <Affix offsetTop={0}>
        <PageHeader
          className="site-page-header"
          onBack={() => {history.goBack()}}
          title="Find Offers"
        />
        <div className="search-bar">
          <Input
            className="inputStyle"
            suffix={
              <Link to="/filter">
              <Button shape="circle" size="small" icon={<ControlOutlined />} />
              </Link>
            }
            prefix={<SearchOutlined />}
            size="default"
            placeholder="Search...."
            onPressEnter={(e) => console.log(e.target.value)}
          />
        </div>
      </Affix>
      <div className="content">
        {offers.map((offer) => (
          <div className="offer-card">
            <Link to= "/details">
            <OfferViewCard {...offer} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferView;
