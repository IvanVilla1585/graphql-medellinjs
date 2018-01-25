const schema = [`

  enum STATUS {
    ACTIVE,
    INACTIVE
  }
  
  # data to create user
  input UserInput {
    name: String!,
    username: String!,
    email: String!,
    address: AddressInput,
    phone: String,
    website: String,
  }
  
  # data to create address
  input AddressInput {
    street: String,
    suite: String,
    city: String,
    zipcode: String
  }
  
  # data address
  type Address {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  }
  
  # data user
  type User {
    id: ID,
    name: String,
    username: String,
    email: String,
    address: Address,
    phone: String,
    website: String,
    status: STATUS
  }
  
  extend type Query {
    # find all users
    users: [User]
    # find user by id
    userById(id: ID!): User
  }
  
  extend type Mutation {
    # create teacher
    userAdd(data: UserInput): User
    # delete teacher
    userDelete(id: ID!): User
  }
`];

module.exports = schema;