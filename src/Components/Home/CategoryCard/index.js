import React, { createFactory } from "react";
import "./index.css";

const CategoryCard = (props) => {
  return (
    <div
      className="categoryCardMainDiv"
      style={{
        background: `linear-gradient(rgba(255,86,115,0.45), rgba(255, 86, 115, 0.45)), url(${props.img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {props.cardName}
    </div>
  );
};

export default CategoryCard;
