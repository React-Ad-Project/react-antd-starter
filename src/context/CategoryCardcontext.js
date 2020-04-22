import React,{createContext,useState} from 'react'

export const CategoryCardContext =createContext();

 function CategoryCardProvider(props) {
   const[ccards,SetCard]= useState(
    {
        catagories: [
          {
            name: "Cafes",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
          {
            name: "Theaters",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
          {
            name: "Electronics",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
          {
            name: "Groceries",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
          {
            name: "Cafes",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
          {
            name: "Cafes",
            img:
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-322599,resizemode-1,msid-69997940/indian-caf-chain-market-will-reach-rs-4540-cr-by-2023-report.jpg",
          },
        ]
      }
   
   )
    return (
        <CategoryCardContext.Provider value={{ccards}}>
           {props.children}
        </CategoryCardContext.Provider>
    )
}
export default CategoryCardProvider;