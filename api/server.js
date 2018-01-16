'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');
const data = require('./data/data');
const curses = require('./data/curses');
const app = express();
const port = 8000;

app.use(bodyParse.json());

// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress((req) => {
  return {
    schema,
    context: {
      data,
      curses
    }
  }
}));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(port, () => console.log(`server running in the port ${port}`));