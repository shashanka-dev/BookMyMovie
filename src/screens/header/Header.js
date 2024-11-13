import React from 'react';
import "./Header.css";
import Logo from "./../../assets/logo.svg";

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        textAlign: 'center'
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    }
});

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Header = function(props) {
    const [open, setOpen] = React.useState(false);
    let loggedIn = true;

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { classes } = props;

    const modalBody = (
        
            <div style={getModalStyle()} className={classes.paper}>
                <div>
                    <FormControl variant="h6" id="modal-title">
                        <InputLabel
                            htmlFor="username"
                            classes={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}>
                            Username*
                                    </InputLabel>
                        <Input
                            id="username"
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl variant="h6" id="modal-title">
                        <InputLabel
                            htmlFor="password"
                            classes={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}>
                            Password*
                                    </InputLabel>
                        <Input
                            type="password"
                            id="password"
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                        />
                    </FormControl>
                </div>
                <div>
                    <Button id="signin" variant="contained" color="primary">Login</Button>
                </div>

            </div>
        
    );

    if (loggedIn) {
        return (
            <div id="header">
                <img id="header-logo" src={Logo} alt="Loading" />
                <span id="btn-grp">
                    
                    <Button id="login" variant="contained" onClick={handleOpen}>Login</Button>
                </span>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                    {modalBody}
                </Modal>
            </div>
        )
    } else {
        return (
            <div id="header">
                <img id="header-logo" src={Logo} alt="Loading" />
                <span id="btn-grp">
                    <Button id="book" variant="contained" color="primary">Book Show</Button>
                    <Button id="logout" variant="contained">Logout</Button>
                </span>
            </div>
        )
    }


}

export default withStyles(styles)(Header);;