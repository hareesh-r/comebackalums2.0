import React from 'react';
import "./Header.css";
import "./img/come-back-logo.png";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="comebackalums/src/img/come-back-logo.png" alt="Comback logo here" />
            </div>
            <div className="header__center"> Amigo</div>
            <div className="header__right">Baba</div>
        </div>
    )
}

export default Header
