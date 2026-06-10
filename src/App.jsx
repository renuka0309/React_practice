import React from "react"

export default function App(){
  let [res, setRes]=React.useState("yes")

  function handleClick(){
    setRes("Definitely");
  }
  return(
    <>
     <h1>Is state important to know?</h1>
     <button onClick={handleClick}>{res}</button>

    </> 
  )
}



