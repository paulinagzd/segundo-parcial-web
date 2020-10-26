/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const finale = require('finale-rest');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oadqzatPjw0Vzirq5d5',
  issuer: 'https://dev-2501994.okta.com/oauth2/default',
});


const app = express();
app.use(cors());
app.use(bodyParser.json());

// verify JWT token middleware
app.use((req, res, next) => {
  // require every request to have an authorization header
  if (!req.headers.authorization) {
    return next(new Error('Authorization header is required'));
  }
  const parts = req.headers.authorization.trim().split(' ');
  const accessToken = parts.pop();
  oktaJwtVerifier.verifyAccessToken(accessToken, 'api://default')
    .then((jwt) => {
      req.user = {
        uid: jwt.claims.uid,
        email: jwt.claims.sub,
      };
      next();
    })
    .catch(next); // jwt did not verify!
});

// For ease of this tutorial, we are going to use SQLite to limit dependencies
const database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite',
  operatorsAliases: false,
});

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
const Post = database.define('posts', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  year: Sequelize.STRING,
  area: Sequelize.STRING,
});

// Initialize finale
finale.initialize({
  app,
  sequelize: database,
});

// Create the dynamic REST resource for our Post model
const userResource = finale.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id'],
});


// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081');
    });
  });
