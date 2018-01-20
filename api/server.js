'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');
const {CourseStorage} = require('./storage/course');
const {UserStorage} = require('./storage/user');

const app = express();
const port = 8000;
mongoose.Promise = Promise;
const conn = mongoose.createConnection('mongodb://localhost:27017/medellinjs');

app.use(bodyParse.json());

// bodyParser is needed just for POST.
app.use('/graphql', graphqlExpress((req) => {
  return {
    schema,
    context: {
      studentStorage: new UserStorage(conn),
      teacherStorage: new UserStorage(conn),
      courseStorage: new CourseStorage(conn)
    }
  }
}));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(port, () => console.log(`server running in the port ${port}`));