import React from "react";
import "./basicbutton.css";

const BasicButton = ({linkExterno, nomeBotao}) =>{
    return(
        <a className="botaoLink" href={linkExterno}>{nomeBotao}</a>
    );
}

export default BasicButton;