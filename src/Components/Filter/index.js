import React, { Component } from "react";
import { LeftOutlined, CloseOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Tag, Slider } from "antd";
import "./index.css";

export default class extends Component {
    render() {
        const marks = {
            0: "0 km",
            100: "100 km",
        };
        return (
            <div style={{ padding: 15 }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 22,
                        alignItems: "center",
                    }}
                >
                    <LeftOutlined />
                    <h3>Filter</h3>
                    <CloseOutlined />
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
                    <h4>Category</h4>
                </div>
                <div className="filter-inner-flex">
                    <h4>Distance</h4>
                    <Slider
                        marks={marks}
                        defaultValue={30}
                        tooltipVisible
                        style={{ width: "85%" }}
                    />
                </div>
            </div>
        );
    }
}
