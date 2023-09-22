import React from "react";
import BasicButton from "./basicButton";
import NomeColecao from "./nomeColecao";
import "./newCollection.css";

const NewCollection = () =>{
    return(
        <div className="novaColecao">
            <img src="public\colecao1.jpg" alt="" />
            <div className="colecaoDesc">
                <NomeColecao nomeColecao="URBAN JUNGLE COLLECTION"/>
                <BasicButton linkExterno={"a"} nomeBotao={"DO AND BE DIFFERENT"}/>
            </div>
        </div>
    );
}

export default NewCollection;