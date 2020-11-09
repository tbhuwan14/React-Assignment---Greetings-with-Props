// write code for Welcome component here
import React from "react";

function Welcome(props){
    return (
        <div>
            <div>"Hey !" <h1>{props.name}.</h1></div>
            <h2>"Welcome to Newton School."</h2>
        </div>
    )
}

export default Welcome;
