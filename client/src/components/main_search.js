import React, { useState,useEffect, useContext } from 'react';
// importing the global context
import {GlobalContext} from '../context/GlobalState';
// axios for the fetch
import axios from 'axios';

// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

// material ui
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
      height:300,
  }
}));

function Main() {
  // getting the faourites and the add to fav function from the global context
  const {
    addToFavourites,favourites
  } = useContext(GlobalContext)

  // state
  const [response,setResponse] = useState([]);
  const [mediaOption,setMediaOption] = useState('');
  const [input, setInput] = useState('');
  const [query,setQuery] = useState('')
  const classes = useStyles();

  // fetching function and passing the query and media to the params for the express server
  useEffect(() => {
    async function getResponse(){
      try {
        const api_response = await axios.get('/search', {
          params: {
            query: input,
            media_type: mediaOption
          }
        })
        const data = api_response.data.results;
        console.log(data);
        setResponse(data);
      } catch (err) {
        console.log(err)
      }
    }
    getResponse()
    // running the function when both input and mediaoption are provided
  }, [input,mediaOption]);

  // getting the value of the checkbox and setting it to the media option
  const Checkbox = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMediaOption(e.target.value);
  };

  // getting the query 
  const GetInput = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  // setting the input to the input state once the search button is clicked
  const Search = (e) => {
    e.preventDefault();
    console.log(mediaOption)
    setInput(query);
  }

  return (
      <React.Fragment>
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {response.length > 0? 'Search Results found for ' + query: 'Itunes search, Please search below'}
          </Typography>
          <Button color="inherit">{favourites.length > 0? favourites.length + " Favourites" : 'No Favourites Yet'}</Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
      <div className="container">
        <div className="row">
            <div className="col-sm-1 col-md-2">
            </div>
            <div className="col-md-8">
            <Form onSubmit={Search}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={10}>
                <Form.Control type="text" placeholder="Search on Itunes..." onChange={GetInput} value={query} />
              </Col>
            </Form.Group>
            <fieldset>
                <br></br>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Movie"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value="movie"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Podcast"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    value="podcast"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Music"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="music"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Music Videos"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="musicVideo"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Audiobook"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="audiobook"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Short Film"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="shortFilm"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Tv Show"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="tvShow"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="Software"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="software"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="E-book"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="ebook"
                    onChange={Checkbox}
                  />
                  <Form.Check
                    type="radio"
                    label="All"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="all"
                    onChange={Checkbox}
                  />
                </Col>
                <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              <Button
                  variant="contained"
                  color="primary"
                  //className={classes.button}
                  startIcon={<SearchIcon />}
                  type="submit"
                >
                  Search
                </Button>
              </Col>
            </Form.Group>
            </fieldset>
            <br></br>
          </Form>
          <br></br>
            </div>
        </div>
        <div className="row">
        {response.map((item) => {
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
                    <IconButton color="secondary" aria-label="upload picture" component="span" onClick = {() => addToFavourites(item)} >
                    <FavoriteBorderIcon />
                    </IconButton>
                    </CardActions>
                    </Card>
                <br></br>
                </div>
        )     
      })}
      </div>
    </div> 
    </React.Fragment>
  );
}


export default Main;
