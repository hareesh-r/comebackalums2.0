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
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://raw.githubusercontent.com/hareesh-r/comebackalums2.0/master/src/img/come-back-logo.png" alt="Comback logo here" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="    Search Alumini" type="text"></input>
                </div>
            </div>
            <div className="header__center">
                <Link to="/">
                    <div className="header__option header__option--active">
                        <div className="icons">
                            <HomeIcon fontSize="large" />
                        </div><div className="icon-name">HOME</div>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="header__option">
                        <div className="icons">
                            <InfoIcon fontSize="large" /> </div><div className="icon-name">ABOUT</div>
                    </div>
                </Link>
                <Link to="/aliminilist">
                    <div className="header__option">
                        <div className="icons">
                            <ListAltIcon fontSize="large" /> </div><div className="icon-name">ALUMINI LIST</div>
                    </div></Link>
                <Link to="/apply">
                    <div className="header__option">
                        <div className="icons">
                            <CreateIcon fontSize="large" /></div><div className="icon-name">ALUMINI APPLICATION</div>
                    </div>
                </Link>
                <Link to="/contact">
                    <div
                        className="header__option">
                        <ContactMailIcon fontSize="large" /><div className="icon-name">CONTACT</div>
                    </div>
                </Link>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <div className="header__infoIcons">
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
        </div>
    )
}

export default Header;
