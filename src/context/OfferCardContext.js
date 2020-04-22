import React,{createContext,useState} from 'react'

export const OfferCardContext =createContext();

 function OfferCardProvider(props) {
   const[cards,SetCard]= useState([
        { name:"Ifthar Hotel",
        address:"KK building , NH47 , Edappally Kochi",
        rating:"3.5",
        offerPercent:"50%",
        type:"Arabian",
        distance:"12km"}
        
    ])
    return (
        <OfferCardContext.Provider value={{cards}}>
           {props.children}
        </OfferCardContext.Provider>
    )
}
export default OfferCardProvider;