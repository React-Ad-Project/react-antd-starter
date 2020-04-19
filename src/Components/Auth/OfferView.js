import React from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { PageHeader } from "antd";
import OfferViewCard from "./components/OfferViewCard";

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
