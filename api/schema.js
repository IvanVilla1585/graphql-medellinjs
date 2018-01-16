const merge = require('lodash.merge');
const {makeExecutableSchema} = require('graphql-tools');

// import schemas and resolvers
const teacherSchema = require('./teacher/schema');
const teacherResolver = require('./teacher/resolver');
const cursesSchema = require('./courses/schema');
const cursesResolver = require('./courses/resolver');

const typeDefs = [
  ...teacherSchema,
  ...cursesSchema
];

const resolvers = merge(
    teacherResolver, cursesResolver
);


const makeExecutableSchemas = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = makeExecutableSchemas;