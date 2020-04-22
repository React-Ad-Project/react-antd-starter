import React, { Component,useContext } from "react";
import OfferCard from "./OfferCard";
import BottomBar from "./BottomBar";
import CategoryCard from "./CategoryCard";
import FriendCard from "./FriendCard";
import { Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./index.css";
import { CategoryCardContext } from "../../context/CategoryCardcontext";
import { OfferCardContext } from "../../context/OfferCardContext";

export default function Home() {
  const {cards}=useContext(OfferCardContext)
  const{ccards}=useContext(CategoryCardContext);
  return (
    <div className="homeMainDiv">
    <Input
      size="large"
      placeholder="Find Offers"
      prefix={<SearchOutlined style={{marginRight:"15px"}}/>}
      suffix={<FilterOutlined />}
      style={{
        border: "none",
        padding:"4px",
        height: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 700 }}>Trending In Your Location</div>
      <div>See all(9)</div>
    </div>
    <div className="wrapperParent">
      <div className="wrapper">
      {cards.map((card) => {
          return <OfferCard name={card.name} address={card.address} rating={card.rating} offerPercent={card.offerPercent} type={card.type} distance={card.distance}/>;
        })}
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 700 }}>Category</div>
      <div>See all(9)</div>
    </div>
    <div className="wrapperParent">
      <div className="wrapper">
        {ccards.catagories.map((item) => {
          return <CategoryCard cardName={item.name} img={item.img} />;
        })}
      </div>
    </div>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 700 }}>Friends</div>
      <div>See all(9)</div>
    </div>
    <div className="wrapperParent">
      <div className="wrapper">
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    </div>
    <BottomBar />
  </div>
  )
}

