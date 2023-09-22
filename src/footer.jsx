import React from "react";
import "./footer.css"

const Footer = () => {  
    return (
    <footer className="footer-bg">
        <div className="footer">
            <div className="detalhes">
                <hr />
                <img src="public/feral.svg" alt="" width={"40"}/>
                <hr />
            </div>
            <div className="footer-links">
                <div className="links">
                    <ul>
                        <li>Marca</li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Perguntas Frequentes</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Suporte</a></li>
                    </ul>
                    <ul>
                        <li>Loja</li>
                        <li><a href="">Bonés</a></li>
                        <li><a href="">Camisetas</a></li>
                        <li><a href="">Nova coleção</a></li>
                        <li><a href="">Todos os produtos</a></li>
                    </ul>
                    <ul className="redes">
                        <li>Redes sociais</li>
                        <li><a href=""><img src="public/instagram.svg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <p className="copy">Feral Quest © Todos os direitos reservados.</p>  
        </div>
    </footer>
    );
}

export default Footer;