import React from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { PageHeader, Input } from "antd";
import OfferViewCard from "./components/OfferViewCard";

const OfferView = () => {
  const offers = [
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" },
    { title: "Ifthar Hotel", location: "Edapally, Ernakulam" }
  ];
  return (
    <div className="offerContainer">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Find Offers"
      />

      <Input.Search
        placeholder="Search"
        className="inputStyle"
        onSearch={value => console.log(value)}
      />

      <div className="content">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <OfferViewCard title={offer.title} location={offer.location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferView;
