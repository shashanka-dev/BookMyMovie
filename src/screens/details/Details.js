import Header from "../header/Header";

import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
});

const Details = function (props) {
    const { classes } = props;
    return (
        <div>
            <Header/>
            <Typography id="back-link"> <ArrowBackIosIcon /> Back to Home </Typography>
            <div class={classes.root}>

            </div>
        </div>
    )
}