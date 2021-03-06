import React, { Component } from "react";
import "./index.css";
import { Input, Select, Upload, message, Button } from "antd";
import { LeftOutlined, CloseOutlined, UploadOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
const { Option } = Select;
const { TextArea } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class PostOffer extends Component {
  render() {
    return (
      <div className="postOfferMainDiv">
        <div className="topSection">
          <LeftOutlined  onClick={() => this.props.history.goBack()} />
          <div>Post Your Offer</div>
          <Link to="/profile">
          <CloseOutlined />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{fontFamily:"Josefin Sans"}}>Category</div>
          <Select
            defaultValue="lucy"
            style={{ width: 300, borderColor:"#8A98BA"}}
            onChange={handleChange}
           
          >
            <Option value="jack">Jack</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          
          }}
        >
          <div>Offer</div>
          <Input placeholder="What Your Offer is" style={{ width: 300,borderRadius:8,borderColor:"#FF4A40" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Picture</div>
          <Upload {...props}>
            <Button style={{ width: 300 ,borderRadius:8 ,backgroundColor:"#FF6969"}}>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </div>
        <div style={{fontFamily:"Josefin Sans"}}>Description</div>
        <TextArea
          rows={4}
          style={{ width: "300px",borderRadius:8 ,fontFamily:"Josefin Sans" }}
          placeholder="Offer Description"
        />
        <div className="postEndButton">Post</div>
      </div>
    );
  }
}
