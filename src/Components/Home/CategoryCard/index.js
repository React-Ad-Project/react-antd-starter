import React, { createFactory } from "react";
import "./index.css";

const CategoryCard = (props) => {
  return (<div className="categoryCardMainDiv">{props.cardName}</div>)
};

export default CategoryCard;
