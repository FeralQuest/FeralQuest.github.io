import React from "react";
import "./header.css"

const Header = () =>{
    return(
        <header className="header-bg">
            <nav className="header-nav">
                <div className="header-menu">
                    <img src="public/menu.svg" alt="" />
                </div>
                <form action="POST" className="header-form">
                        <input type="text" name="search" id="search" required/>
                        <label htmlFor="search">Buscar</label>
                        <button><img src="public/searchnormal1.svg" alt="" /></button>
                    </form>
                <div className="center">
                    <a href=""><img src="public/feralsvg.svg" alt="" width="120"/></a>
                </div>
                <div className="header-buttons">
                    <img src="public\shoppingbag.svg" alt="" />
                    <img src="public\user.svg" alt="" />
                </div>
            </nav>
        </header>
        );
}

export default Header;