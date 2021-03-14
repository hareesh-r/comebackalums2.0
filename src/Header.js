import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="http://comeback-alums.ml/com back logo.png" alt="Comback logo here" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text"></input>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontSize="large" /> HOME
                </div>
                <div className="header__option">
                    <InfoIcon fontSize="large" /> ABOUT
                </div>
                <div className="header__option">
                    <ListAltIcon fontSize="large" /> ALUMINI LIST
                </div>
                <div className="header__option">
                    <CreateIcon fontSize="large" /> ALUMINI APPLICATION
                </div>
                <div className="header__option">
                    <ContactMailIcon fontSize="large" /> CONTACT
                </div>

            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Hareesh</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;
