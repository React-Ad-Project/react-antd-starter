import React, { Component } from 'react'
import { StarFilled, CaretDownFilled, LeftOutlined, PushpinFilled } from "@ant-design/icons";
import { Menu, Dropdown, Tag } from 'antd';
import "./index.css";
import offerbg from './offerpic.png';



export default class extends Component {
    render() {
       const menu = (
         <Menu>
         <Menu.Item key="0"> SAT: 9:30 am to 10:00 pm </Menu.Item>
         <Menu.Item key="1"> SUN: 10:00 am to 10:00 pm </Menu.Item>
         
         </Menu>
        );
        
        return (
           <div className="offdis-main-layout container"  >
                 
                <div 
                
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 22,
                        alignItems: "center",
                        padding: 20,
                    }}
                >
                    <LeftOutlined style={{ color: "#FFFFFF" }} onClick={()=>{this.props.history.goBack()}}/>
                    <PushpinFilled style={{ color: "#FFFFFF" }}/>
                   
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="offdis-blur-flex">
                    
                    <Tag
                        className="offdis-background offdis-location"
                    >
                        xxx
                    </Tag>
                </div>
               
                <div style={{ padding: 15 }}>

                    <div className="offdis-inner-flex">
                           <div 
                             style={{ display: "flex", justifyContent: "space-between",  
                             alignItems: "center",
                             }}>
                            <h2><b>Ifthar Hotel</b></h2>
                            <Tag className="offdis-tag1"> Arabian </Tag>
                            <Tag className="offdis-tag2"> 1.2 km </Tag>
                            <Tag icon={<StarFilled style={{ color: "#ffcc03" }} />} className="offdis-tag3"><b>4.5</b></Tag>
                        </div>
                         <div className="offdis-bodytext">   
                               K K Building NH47, Edapally, Kochi
                              <p>
                                  <span style={{ color: 'red' }}>Open Now</span> daily time {" "}  
                               <Dropdown overlay={menu} trigger={['click']}>
                                   <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: 'red' }}>
                                       9:30 am to 11:00 pm <CaretDownFilled />
                                   </a>
                               </Dropdown>,
                               </p>
                         </div>      
                    </div>
                         <h2><b>Offers Provided</b></h2>    
                         
                    <div>

                    </div>


                </div>     
                     
           </div>
        )
    }
}
