import React, { Children } from "react";

function  Button ({onClick,title}){
    return(
            <button onClick={onClick}>{title}</button>
    )
}
export default Button;