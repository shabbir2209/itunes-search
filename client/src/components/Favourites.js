import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
//import Card from 'react-bootstrap/Card';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

// material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    media: {
        height:250,
    }
  }));

  // this component pulls the favpurites from the global context and displays them
export const Favourites = () => {
  // getting the favourites array and the remove from fav function to use in the component
    const {favourites,removeFavourite} = useContext(GlobalContext);
    // using the material ui styles
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Favourites
          </Typography>
          {/* checking whether there are favourites and displays the number of favourites */}
          <Button color="inherit">{favourites.length > 0? favourites.length + ' Favourites' : 'No Favourites Yet'}</Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
        <div>
            <div className="row">
            {favourites.map((item) => {
        return(
                <div className="col-md-3">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`${item.artworkUrl100}`}
                        title="image"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {item.trackName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.longDescription}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <a href={`${item.trackViewUrl}`} target="_blank"><IconButton color="primary" aria-label="upload picture" component="span">
                    <MusicNoteIcon />
                    </IconButton></a>
                    <IconButton color="secondary" aria-label="upload picture" component="span" onClick = {() => removeFavourite(item)} >
                    <DeleteForeverIcon />
                    </IconButton>
                    </CardActions>
                    </Card>
                <br></br>
                </div>
        )     
      })}
            </div>
           
        </div>
        </>
    )
}
