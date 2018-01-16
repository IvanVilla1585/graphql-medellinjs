const schema = [`
  enum STATUS {
    ACTIVE,
    INACTIVE
  }
  
  # data teacher
  type Teacher {
    name: String,
    lastName: String,
    address: String,
    document: String,
    status: STATUS
  }
  
  extend type Query {
    # find all teachers
    teachers: [Teacher]
  }
`];

module.exports = schema;