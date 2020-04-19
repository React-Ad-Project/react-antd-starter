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
        style={{ width: 300, borderRadius: 10 }}
        cover={<img alt="example" src={props.imgUrl} />}
      >
        <Meta title={props.title} description={props.location} />
        <div className="catTag">{props.category}</div>
        <div className="distTag">{props.distance} Km</div>
        <div className="cardRating">
          <Rate disabled defaultValue={1} count={1} />
          <small className="rateContent">{props.rating}</small>
        </div>
        <div className="offbox">{props.offer}</div>
      </Card>
    </div>
  );
};

export default OfferViewCard;
