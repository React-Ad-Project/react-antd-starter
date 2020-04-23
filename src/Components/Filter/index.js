import React, { Component } from "react";
import { LeftOutlined, CloseOutlined, EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import { Tag, Slider, InputNumber, Rate } from "antd";
import "./index.css";
import SelectCategory from "./SelectCategory";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distance: null,
            categories: [],
            rating: 3,
        };
    }

    onSliderchange = (distance) => {
        this.setState({ distance });
    };

    onCategoryUpdate = (categories) => {
        this.setState({ categories });
    };

    onRatingChange = (rating) => {
        this.setState({ rating });
    };

    render() {
        const marks = {
            0: "0 km",
            100: "100 km",
        };

        const { rating } = this.state;

        return (
            <div className="filter-main-layout">
                <div style={{ padding: 15 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 22,
                            alignItems: "center",
                        }}
                    >
                        <LeftOutlined  onClick={() => this.props.history.goBack()} />
                        <h3>Filter</h3>
                        <CloseOutlined onClick={() => this.props.history.goBack()} />
                    </div>
                    <div className="filter-inner-flex">
                        <h4>Location</h4>
                        <Tag
                            icon={<EnvironmentOutlined />}
                            className="filter-background filter-location"
                        >
                            Edapally, Kochi, Kerala
                        </Tag>
                    </div>
                    <div className="filter-inner-flex">
                        <SelectCategory onCategoryUpdate={this.onCategoryUpdate} />
                    </div>
                    <div className="filter-inner-flex">
                        <h4>Distance</h4>
                        <Slider
                            marks={marks}
                            defaultValue={30}
                            tooltipVisible
                            style={{ width: "85%" }}
                            onChange={this.onSliderchange}
                        />
                    </div>
                    <div className="filter-inner-flex">
                        <h4>Rating</h4>
                        <Rate defaultValue={3} onChange={this.onRatingChange} />
                        {rating < 5 ? `${rating} Star and up` : `5 Star`}
                    </div>
                </div>
                <div className="filter-apply-button">Apply</div>
            </div>
        );
    }
}
