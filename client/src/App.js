import React from 'react';
import './App.css';
// importing the main component
import Main from './components/main_search';
// importing the globalProvider from global state tp wrap around all the components
import {GlobalProvider} from './context/GlobalState';
// importing the route components from the react router dom package
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// importing the favourites compnent
import {Favourites} from './components/Favourites';

//SCREW YOU!!!!!!!!

// UI imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {
  return (
    // wrapping the global provider to all the components and creating the routes between the components
    <GlobalProvider>
      <Router>
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">
        <Link to="/"><Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >
        Search
      </Button></Link>
        </Nav.Link>
        <Nav.Link>
        <Link to="/favourites"><Button
        variant="contained"
        color="secondary"
        //className={classes.button}
        startIcon={<FavoriteIcon />}
      >
        Favourites
      </Button></Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Switch>
    <Route exact path ="/">
      <Main />
    </Route>
    <Route exact path ="/favourites">
      <Favourites />
    </Route>
  </Switch>
    </Router>
    </GlobalProvider>
    
    
  );
}

export default App;
