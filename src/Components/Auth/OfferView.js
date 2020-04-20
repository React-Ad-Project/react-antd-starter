import React, { useState } from "react";
import "antd/dist/antd.css";
import "./auth.css";
import { PageHeader, Input, Button, Affix } from "antd";
import OfferViewCard from "./components/OfferViewCard";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";

const OfferView = () => {
  const offers = [
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: " https://wallpaperaccess.com/full/767046.jpg",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: " https://wallpaperaccess.com/full/767046.jpg",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
    {
      title: "Ifthar Hotel",
      location: "Edapally, Ernakulam",
      imgUrl: "https://wallpaperaccess.com/full/767046.jpg ",
      category: "Arabian",
      rating: 4.2,
      off: "45% Off",
      distance: 2.1,
    },
  ];

  const [top, setTop] = useState(10);

  return (
    <div className="offerContainer">
      <Affix offsetTop={top} onChange={() => setTop(top + 10)}>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Find Offers"
        />

        <div className="search-bar">
          <Input
            className="inputStyle"
            suffix={
              <Button shape="circle" size="small" icon={<ControlOutlined />} />
            }
            prefix={<SearchOutlined />}
            size="default"
            placeholder="Search...."
            //   onSearch={(value) => console.log(value)}
          />
        </div>
      </Affix>
      <div className="content">
        {offers.map((offer) => (
          <div className="offer-card">
            <OfferViewCard {...offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferView;
