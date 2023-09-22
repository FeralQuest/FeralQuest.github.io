import React from "react";
import BasicButton from "./basicButton";
import produtos from "./produtos";
import "./produtoMain.css";

const ProdutoMain = ({srcImage, altImage, nomeProduto}) =>{
    srcImage = "public/bone.jpg";
    altImage = "teste"
    nomeProduto = "DAD HAT 001"
    return(
        <div className="produtoMain">
            <div className="produtoImg">
                <a href=""><img src={srcImage} alt={altImage} width="368" height="368"/></a>
                <div className="produtoBotao">
                    <h2>{nomeProduto}</h2>
                    <BasicButton linkExterno={"a"} nomeBotao={"VER PRODUTO"}/>
                </div>
            </div>
        </div>
    );
}

export default ProdutoMain;