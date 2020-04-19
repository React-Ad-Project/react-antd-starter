import React from "react";
import "antd/dist/antd.css";
import { Card, Rate } from "antd";
import "../auth.css";

const { Meta } = Card;

const OfferViewCard = (props) => {
  return (
    <div>
      <Card
        hoverable
        className="main-card"
        style={{ width: 350, borderRadius: 10 }}
        cover={
          <img
            alt="example"
            src="https://wallpaperaccess.com/full/767046.jpg"
          />
        }
      >
        <Meta title="Ifthar Hotel" description="Edapally, Ernakulam" />
        <div className="catTag">Arabian</div>
        <div className="distTag">2.5 Km</div>
        <div className="cardRating">
          <Rate disabled defaultValue={1} count={1} />
          <small className="rateContent">4.3</small>
        </div>
        <div className="offbox">50% Off</div>
      </Card>
    </div>
  );
};

export default OfferViewCard;
