const schema = [`
  
  # data to create course
  input CourseInput {
    name: String!,
    description: String,
    level: Int!,
    price: Float!,
    status: Boolean
  }
  
  # data to edit course
  input CourseEditInput {
    name: String,
    description: String,
    level: Int,
    price: Float,
    status: Boolean
  }
  
  # data course
  type Course {
    name: String,
    description: String,
    status: Boolean,
    price: Float,
    level: Int
  }
  
  extend type Query {
    # find all courses
    courses: [Course]
    # find course by id
    courseById(id: ID!): Course
  }
  
  extend type Mutation {
    # create course
    courseAdd(data: CourseInput): Course
    # update course
    courseEdit(id: ID!, data: CourseEditInput): Course
    # delete course
    courseDelete(id: ID!): Course
  }
`];

module.exports = schema;