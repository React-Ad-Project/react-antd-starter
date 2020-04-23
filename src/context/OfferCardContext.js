import React,{createContext,useState,useEffect} from 'react'

export const OfferCardContext =createContext();

 function OfferCardProvider(props) {
     
    const[cards,SetCard]= useState([])
    useEffect(() => {
        fetch("/api/allposts")
          .then(res => res.json())
          .then(
            (result) => {
              SetCard(result);
            },
            (error) => {
             console.log(error)
            }
          )
      }, [])

    return (
        <OfferCardContext.Provider value={{cards}}>
           {props.children}
        </OfferCardContext.Provider>
    )
}
export default OfferCardProvider;