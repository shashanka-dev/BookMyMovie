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

class Header extends React.Component {
    render() {
        let loggedIn = true;

        if (loggedIn) {
            return (
                <div id="header">
                    <img id="header-logo" src={Logo} alt="Loading" />
                    <CustomModalStyle />
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
}

class CustomModal extends React.Component {
    state = {
        open: false,
    };
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <span id="btn-grp">
                <Button id="login" variant="contained" onClick={this.handleOpen}>Login</Button>
            </span>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
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
            </Modal>
            </div>
        )
    }
}

const CustomModalStyle = withStyles(styles)(CustomModal);

export default Header; 