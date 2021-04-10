import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Avatar, IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { actionTypes } from './reducer';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

function Header() {

    const [{ user }, dispatch] = useStateValue();

    const signOut = () => {
        
        localStorage.clear();
        dispatch({
            type: actionTypes.RESET_USER,
            user: null,
        });
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://raw.githubusercontent.com/hareesh-r/comebackalums2.0/master/src/image/com%20back%20logo.png" alt="Comback logo here" />
                <Link to="/search">
                    <div className="header__input">
                        <SearchIcon />
                        <input placeholder="Search alumni    " type="text">
                        </input>
                    </div>
                </Link>
            </div>
            <div className="header__center">
                <Link to="/home">
                    <div className="header__option ">
                        <div className="icons">
                            <HomeIcon fontSize="large" />
                        </div><div className="icon-name">HOME</div>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="header__option ">
                        <div className="icons">
                            <InfoIcon fontSize="large" /> </div><div className="icon-name">ABOUT</div>
                    </div>
                </Link>
                <Link to="/aluminilist">
                    <div className="header__option ">
                        <div className="icons">
                            <ListAltIcon fontSize="large" /> </div><div className="icon-name">ALUMNI LIST</div>
                    </div></Link>
                <Link to="/apply">
                    <div className="header__option ">
                        <div className="icons">
                            <CreateIcon fontSize="large" /></div><div className="icon-name">ALUMNI APPLICATION</div>
                    </div>
                </Link>
                <Link to="/contact">
                    <div
                        className="header__option   ">
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
                            <Link to="/contact">
                                <LiveHelpIcon />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon onClick={signOut} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
