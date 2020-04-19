import React from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { PageHeader, Input, Button } from "antd";
import OfferViewCard from "./components/OfferViewCard";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";

const OfferView = () => {
  const offers = [
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
  ];
  return (
    <div className="offerContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Find Offers"
      />
      <div className="search-bar">
        <Input
          suffix={
            <Button shape="circle" size="small" icon={<ControlOutlined />} />
          }
          prefix={<SearchOutlined />}
          size="default"
          placeholder="Search...."
        />
      </div>
      <div className="content">
        {offers.map((offer) => (
          <div className="offer-card">
            <OfferViewCard title={offer.title} location={offer.location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferView;
