const express = require('express');
const dotenv = require('dotenv');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;


// dotenv.config()

// var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
// var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});




const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  })); 

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  


  // // SPOTIFY LOGIC
  // var generateRandomString = function (length) {
  //   var text = '';
  //   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (var i = 0; i < length; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // };

  // // GET method to perform redirection to spotify login screen to allow users to grant permission
  // app.get('/auth/login', (req, res) => {

  //   var scope = "streaming \
  //              user-read-email \
  //              user-read-private"

  //   var state = generateRandomString(16);

  //   var auth_query_parameters = new URLSearchParams({
  //     response_type: "code",
  //     client_id: spotify_client_id,
  //     scope: scope,
  //     redirect_uri: "http://localhost:3000/auth/login",
  //     state: state
  //   })

  //   res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
  // });

  // // implement the auth/callback endpoint of the server
  // app.get('/auth/callback', (req, res) => {

  //   var code = req.query.code;

  //   var authOptions = {
  //     url: 'https://accounts.spotify.com/api/token',
  //     form: {
  //       code: code,
  //       redirect_uri: "http://localhost:3000/auth/callback",
  //       grant_type: 'authorization_code'
  //     },
  //     headers: {
  //       'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     json: true
  //   };

  //   request.post(authOptions, function (error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //       var access_token = body.access_token;
  //       res.redirect('/')
  //     }
  //   });
  // });

  // // return access token
  // app.get('/auth/token', (req, res) => {
  //   res.json(
  //     {
  //       access_token: access_token
  //     })
  // })



  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
