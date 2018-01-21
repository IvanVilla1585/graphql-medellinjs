const schema = [`
  
  # data to create student
  input StudentInput {
    name: String!,
    lastName: String!,
    address: String,
    birthday: String!,
    type: TYPE!,
    status: Boolean,
    courses: [ID]
  }
  
  # data to edit student
  input StudentEditInput {
    name: String,
    lastName: String,
    address: String,
    birthday: String,
    type: TYPE,
    status: Boolean,
    courses: [ID]
  }
  
  # data student
  type Student {
    id: ID,
    name: String,
    lastName: String,
    address: String,
    birthday: String,
    type: TYPE,
    status: Boolean
    courses: [Course]
  }
  
  type Query {
    # find all students
    students: [Student]
    # find teacher by id
    studentById(id: ID!): Teacher
  }
  type Mutation {
    # create student
    studentAdd(data: StudentInput): Student
    # update student
    studentEdit(id: ID!, data: StudentEditInput): Teacher
    # delete student
    studentDelete(id: ID!): Teacher
  
  }
`];

module.exports = schema;