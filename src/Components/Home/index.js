import React, { Component } from "react";
import OfferCard from "./OfferCard";
import BottomBar from "./BottomBar";
import CategoryCard from "./CategoryCard";
import FriendCard from "./FriendCard";
import { Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <div className="homeMainDiv">
        <Input
          size="large"
          placeholder="Find Offers"
          prefix={<SearchOutlined />}
          suffix={<FilterOutlined />}
          style={{
            border: "none",
            padding: "4px",
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
            <OfferCard
              name="Ifthar Hotel"
              address="KK building , NH47 , Edappally Kochi"
              rating="3.5"
              offerPercent="50%"
              type="Arabian"
              distance="12km"
              pic="src\Components\Home\img\cafe.jpeg"
            />
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
            <CategoryCard cardName="Cafes" />
            <CategoryCard cardName="Theaters" />
            <CategoryCard cardName="Electronics" />
            <CategoryCard cardName="Groceries" />
            <CategoryCard cardName="Cafes" />
            <CategoryCard cardName="Cafes" />
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
    );
  }
}
