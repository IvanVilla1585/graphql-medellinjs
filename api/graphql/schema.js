const merge = require('lodash.merge');
const {makeExecutableSchema} = require('graphql-tools');

// import schemas and resolvers
const teacherSchema = require('./graphql/user/schema');
const teacherResolver = require('./graphql/user/resolver');
const cursesSchema = require('./graphql/post/schema');
const cursesResolver = require('./graphql/post/resolver');
const studentSchema = require('./graphql/comment/schema');
const studentResolver = require('./graphql/comment/resolver');

const typeDefs = [
  ...teacherSchema,
  ...cursesSchema,
  ...studentSchema
];

const resolvers = merge(
    teacherResolver, cursesResolver, studentResolver
);


const makeExecutableSchemas = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = makeExecutableSchemas;