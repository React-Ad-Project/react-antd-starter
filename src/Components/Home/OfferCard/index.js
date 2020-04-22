
import React, { useState, useEffect,useContext } from "react";
import "./index.css";
import { StarOutlined, GoldenFilled } from "@ant-design/icons";


const OfferCard = (props) => {
  return (
    
           <div className="offerCardMainDiv">
           <img
             alt="food"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Still_Life_Photograph.jpg/299px-Still_Life_Photograph.jpg"
             style={{ borderRadius: "15px" }}
           />
           <div className="offerPercent" style={{color:"red"}}>{props.offerPercent}Off</div>
           <div className="offerRating">
             <StarOutlined style={{color:"gold"}}/>
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
             <div style={{fontFamily:"Josefin Sans"}}>{props.address}</div>
           </div>
         </div>
            )

                }
      
 

export default OfferCard;

