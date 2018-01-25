const schema = [`

  # data to create comment
  input CommentInput {
    postId: ID!,
    name: String!,
    email: String!,
    body: String!
  }

  # data to edit comment
  input CommentEditInput {
    postId: ID,
    name: String,
    email: String,
    body: String
  }
 
  type Comment {
    id: ID,
    postId: ID,
    post: Post,
    name: String,
    email: String,
    body: String
  }

  type Query { 
    comments: [Comment] 
  }

  type Subscription {
    commentAdd(data: CommentInput): Comment
  }
`];

module.exports = schema;