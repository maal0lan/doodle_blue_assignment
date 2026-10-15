import React from "react";
import '../../App.css'
const Button = ({name, onClick})=> {
    return(
        <button className="head-button" onClick={onClick}>
{name}
        </button>
    )
}
export default Button;