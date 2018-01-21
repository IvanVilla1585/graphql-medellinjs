const schema = [`
  enum TYPE {
    TEACHER,
    STUDENT
  }
  
  # data to create teacher
  input TeacherInput {
    name: String!,
    lastName: String!,
    address: String,
    document: String!,
    documentType: String!,
    type: TYPE!,
    status: Boolean,
    courses: [ID]
  }
  
  # data to edit teacher
  input TeacherEditInput {
    name: String,
    lastName: String,
    address: String,
    document: String,
    documentType: String,
    type: TYPE,
    status: Boolean,
    courses: [ID]
  }
  
  # data teacher
  type Teacher {
    _id: ID,
    name: String,
    lastName: String,
    address: String,
    document: String,
    documentType: String,
    type: TYPE,
    status: Boolean,
    courses: [Course]
  }
  
  extend type Query {
    # find all teachers
    teachers: [Teacher]
    # find teacher by id
    teacherById(id: ID!): Teacher
  }
  
  extend type Mutation {
    # create teacher
    teacherAdd(data: TeacherInput): Teacher
    # update teacher
    teacherEdit(id: ID!, data: TeacherEditInput): Teacher
    # delete teacher
    teacherDelete(id: ID!): Teacher
  }
`];

module.exports = schema;