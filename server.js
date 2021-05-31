// main server file
const express = require('express');
const app = express();
// setting the port to 3001
const PORT = process.env.PORT || 3001;
// getting the node fetch module
const fetch = require('node-fetch');
//importing the helmet package
const helmet = require('helmet');
const path = require('path');

// Server test link
app.get('/', (req,res) => {
    res.send('Server test');
});

// search link and getting the paramters from the client side 
app.get('/search', async (req,res) => {
    // receiving the params from the react app
    const query = req.query.query
    const media_type = req.query.media_type
    const itunes_url = `https://itunes.apple.com/search?term=${query}&media=${media_type}`;
    // fetchinhg from the itunes link using the parameter variables
    const fetch_response = await fetch(itunes_url);
    const json = await fetch_response.json();
    // responding to the server with the data
    res.json(json);
});

// production code
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
    });
}

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// using helmet for securing the app
app.use(helmet());

// listening on port 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
