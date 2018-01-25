const schema = [`
  
  # data to create post
  input PostInput {
    userId: ID!, 
    title: String!, 
    body: String!
  }
  
  # data post
  type Post {
    id: ID, 
    userId: ID, 
    user: User, 
    title: String, 
    body: String,
    comments: [Comment]
  }
  
  union SearchResult = Post | Comment
  
  extend type Query {
    # find all post
    posts: [Post]
    # find all post and comments
    search(search: String!): [SearchResult]
    # find post by id
    postById(id: ID!): Post
  }
  
  type Mutation {
    # create post
    postAdd(data: PostInput): Post
  }
`];

module.exports = schema;