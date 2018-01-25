const merge = require('lodash.merge');
const {makeExecutableSchema} = require('graphql-tools');

// import schemas and resolvers
const userSchema = require('./user/schema');
const userResolver = require('./user/resolver');
const postSchema = require('./post/schema');
const postResolver = require('./post/resolver');
const commentSchema = require('./comment/schema');
const commentResolver = require('./comment/resolver');

const typeDefs = [
  ...userSchema,
  ...postSchema,
  ...commentSchema
];

const resolvers = merge(
    userResolver, postResolver, commentResolver
);


const makeExecutableSchemas = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = makeExecutableSchemas;