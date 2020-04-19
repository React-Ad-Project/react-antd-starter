import React, { useState, useEffect } from "react";
import "./index.css";
import { StarOutlined } from "@ant-design/icons";

const OfferCard = (props) => {
  return (
    <div className="offerCardMainDiv">
      <img
        alt="food"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Still_Life_Photograph.jpg/299px-Still_Life_Photograph.jpg"
        style={{ borderRadius: "15px" }}
      />
      <div className="offerPercent">{props.offerPercent}Off</div>
      <div className="offerRating">
        <StarOutlined />
        <div>{props.rating}</div>
      </div>
      <div className="bottomContent">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>{props.name}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "40%",
              justifyContent: "space-between",
            }}
          >
            <div className="tag">{props.type}</div>
            <div className="tag">{props.distance}</div>
          </div>
        </div>
        <div>{props.address}</div>
      </div>
    </div>
  );
};

export default OfferCard;
