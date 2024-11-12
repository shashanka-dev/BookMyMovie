import React from 'react';
import Header from '../header/Header';

import "./Home.css";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
});

const gridStyles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    
});

const tileData = [
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image0',

    },
    {
        img: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Image1',

    },
    {
        img: 'https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-600w-1529923664.jpg',
        title: 'Image2',

    },
    {
        img: 'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
        title: 'Image3',

    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
        title: 'Image4',
    },
    {
        img: 'https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg',
        title: 'Image5',
    },
    {
        img: 'https://image.shutterstock.com/image-illustration/nature-technology-abstract-concept-robot-600w-1072059917.jpg',
        title: 'Image6',
    }
];

const Home = function (props) {
    const { classes } = props;

    return (
        <div>
            <Header />
            <div id="home-page-heading">
                Upcoming Movies
            </div>
            <div className={classes.root}>
                <GridList cellHeight={250} className={classes.gridList} cols={6}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <ReleasedSec/>
            </div>
        </div>
    )
}

const Released = function (props) {
    const { classes } = props;

    return (
        <div id="released">
            <div id="released-movies">
                <GridList cellHeight={350} className={classes.gridList} cols={4}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                                actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
                
            <div>

            </div>
        </div>
    )
}

 const ReleasedSec = withStyles(gridStyles)(Released);

export default withStyles(styles)(Home);