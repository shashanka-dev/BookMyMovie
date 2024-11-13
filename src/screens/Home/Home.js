import React from 'react';
import Header from '../header/Header';

import "./Home.css";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

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

const cardStyle = theme => ({
    filterRoot: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        maxWidth: 240,
        minWidth: 240,
    },
    textField: {
        width: "100%",
    },
    formControl: {
        width: "100%"
    },
    
});

const tileData = [
    {
        img: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        title: 'Black Panther',

    },
    {
        img: 'https://www.scifi-movies.com/images/contenu/data/0004657/affiche-le-labyrinthe-le-remede-mortel-the-maze-runner-the-death-cure-2018-3.jpg',
        title: 'Maze Runner',

    },
    {
        img: 'https://i2.wp.com/fireballtim.com/wp-content/uploads/2014/11/robotoverlords-finalposter-full.jpg',
        title: 'Robot Overloads',

    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMDlmNDZlNzgtZGQzZC00ODFhLWE4NzItOTVjYjNlYWY4YzJjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg',
        title: 'Chennai Express',

    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg',
        title: 'Pink',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/9/90/Kaththi_poster.jpg',
        title: 'Ikka',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/6/68/Newton_%28film%29.png',
        title: 'Newton',
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
                <ReleasedSec />
            </div>
        </div>
    )
}



const Released = function (props) {
    const { classes } = props;

    const showDetails = (title) =>  {
        console.log(title)
    }

    return (
        <div id="released">
            <div id="released-movies">
                <GridList cellHeight={350} className={classes.gridList} cols={4}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} >
                            <img src={tile.img} alt={tile.title} onClick={showDetails(tile.title)}/>
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div id="filter">
                <FilterCard />
            </div>
        </div>
    )
}

const Filter = function (props) {
    const { classes } = props;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };

    const genreNames = [
        'Drama',
        'Thriler',
        'Action',
        'Sci-Fi'
    ]
    const [genre, setGenre] = React.useState([]);
    const genreChange = (event) => {
        setGenre(event.target.value);
    };

    const artistNames = [
        'Amitabh Bachchan',
        'Shah Rukh Khan',
        'Ranveer Singh',
        'Farhan Akhtar',
        'Raj Kumar Rao'
    ]
    
    const [artist, setArtist] = React.useState([]);
    const artistChange = (event) => {
        setArtist(event.target.value);
    };

    return (
            <Card className={classes.filterRoot}>
                <CardActionArea>
                    <CardContent>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel
                                    htmlFor="moviename"
                                    classes={{
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    }}>
                                    Movie Name
                                            </InputLabel>
                                <Input
                                    id="moviename"
                                    classes={{
                                        underline: classes.cssUnderline,
                                    }}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="genre-label">Generes</InputLabel>
                                <Select
                                    labelid="genre-label"
                                    id="genre"
                                    multiple
                                    value={genre}
                                    onChange={genreChange}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {genreNames.map((genreName) => (
                                        <MenuItem key={genreName} value={genreName}>
                                        <Checkbox checked={genre.indexOf(genreName) > -1} />
                                        <ListItemText primary={genreName} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="genre-label">Artists</InputLabel>
                                <Select
                                    labelid="genre-label"
                                    id="genre"
                                    multiple
                                    value={artist}
                                    onChange={artistChange}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {artistNames.map((artistName) => (
                                        <MenuItem key={artistName} value={artistName}>
                                        <Checkbox checked={artist.indexOf(artistName) > -1} />
                                        <ListItemText primary={artistName} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <form noValidate>
                                <TextField
                                    id="date"
                                    label="Release Date Start"
                                    type="date"
                                    placeholder="dd-mm-yyyy"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                        <div>
                            <form noValidate>
                                <TextField
                                    id="date"
                                    label="Release Date End"
                                    type="date"
                                    placeholder="dd-mm-yyyy"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button id="filter" variant="contained" color="primary">Filter</Button>
                </CardActions>
            </Card>
    )
}

const ReleasedSec = withStyles(gridStyles)(Released);

const FilterCard = withStyles(cardStyle)(Filter);

export default withStyles(styles)(Home);