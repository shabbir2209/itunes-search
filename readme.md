The itunes search app pulls all the data from the itunes API.

The node modules will not be included when downloading the app:

1- npm install = this installs the necessary packages needed for the app from the package.json file

2- npm start should simultaneously start the front-end and the back-end express server.

Helemet package as been installed and initiated on the express server to harden security

The paramters are passsed on from the axios url to the express server which then pulls the parameters and passes it to the itunes API.

CORS is not required when requesting from a server like express.

To test the app run npm run test and it should test whether the server is running.

When the app runs you can:

Search for anything from the Itunes API,
search for query and select the media type, this will pull out all the data.

From the data you can add it to favourites using the heart icon or view it on the itunes website using the music node icon.

You can view your collection from the favourites tab from which you are able to remove the desired favourite by clicking on the trash icon.

Enjoy the App ;)
