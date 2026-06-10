import React from "react"

export default function App(){
    const [count, setCount]=React.useState(0)

    function add(){
        setCount(count+1)
    }

    function sub(){
        setCount(count-1)
    }
    return(
        <>
          <h1>How many times will bob say "State" in this section?</h1>
          <div>
            <button onClick={sub}>-</button>
            <button>{count}</button>
            <button onClick={add}>+</button>
          </div>
        </>
    )
}