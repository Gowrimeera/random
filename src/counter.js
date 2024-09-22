import { useState } from "react"
import "./style.css"
function Counter(){
    var[count,setCount]=useState(0)

    function random(){
        setCount(Math.floor(Math.random()*100)+1)
    }
    return(
        <div className="counter">
            <div className="counter-1">
        <h2>Random number Generator</h2>
        <h1>{count}</h1>
        <button className="radiant-button" onClick={random}>Generate</button>
        </div>
        </div>
    )
}


export default Counter


