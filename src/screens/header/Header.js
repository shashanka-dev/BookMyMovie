import React from 'react';
import "./Header.css";
import Logo from "./../../assets/logo.svg";
import Button from '@material-ui/core/Button';

const Header = function() {
    let loggedIn = true;
    if (loggedIn) {
        return (
            <div container id="header">
                <img id="header-logo" src={Logo} alt="Loading"/>
                <span id="btn-grp">
                    <Button id="login" variant="contained">Login</Button>
                </span>
            </div>
        )
    } else {
        return (
            <div container id="header">
                <img id="header-logo" src={Logo} alt="Loading"/>
                <span id="btn-grp">
                    <Button id="book" variant="contained" color="primary">Book Show</Button>
                    <Button id="logout" variant="contained">Logout</Button>
                </span>
            </div>
        )
    }
     
}

export default Header;