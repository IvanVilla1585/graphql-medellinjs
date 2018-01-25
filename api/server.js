'use strict'

const express = require('express');
const Promise = require('bluebird');
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { createServer } = require('http');

const config = require('./config');
const schema = require('./graphql/schema');
const UserStorage = require('./graphql/user/storage');
const PostStorage = require('./graphql/post/storage');
const CommentStorage = require('./graphql/comment/storage');
const {pubsub} = require('./subscriptions');

mongoose.Promise = Promise;

const app = express();
const port = 8000;

const conn = mongoose.createConnection(config.db);

app.use(cors());
app.use(bodyParse.json());

// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress((req) => {
  return {
    schema,
    context: {
      userStorage: new UserStorage(conn),
      postStorage: new PostStorage(conn),
      commentStorage: new CommentStorage(conn),
      pubsub
    }
  }
}));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'

}));

const server = createServer(app);

/**
 * RUN SERVER
 */
app.listen(port, () => {
  /**
   * RUN SERVER SUBSCRIPTION
   */
  // new SubscriptionServer({ // eslint-disable-line no-new
  //   schema,
  //   execute,
  //   subscribe,
  // }, {
  //   path: '/subscriptions',
  //   server,
  // });
  console.log(`server running in the port ${port}`)
});