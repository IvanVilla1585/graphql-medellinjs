const schema = [`
  
  # data course
  type Course {
    name: String,
    description: String,
    status: STATUS
  }
  
  type Query {
    # find all courses
    courses: [Course]
  }
`];

module.exports = schema;