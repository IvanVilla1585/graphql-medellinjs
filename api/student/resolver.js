const resolver = {
  Query: {
    async students(root, args, {studentStorage}) {
      let results = [];
      try {
        results = await studentStorage.find({type: 'STUDENT'});
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    },
    async studentById(root, args, {studentStorage}) {
      let result = {};
      try {
        result = await studentStorage.findById(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  },
  Mutation: {
    async studentAdd(root, args, {studentStorage}) {
      let result = {};
      try {
        result = await studentStorage.save(args.data);
      } catch (err) {
        return result;
      }
      return result;
    },
    async studentEdit(root, args, {studentStorage}) {
      let result = {};
      try {
        result = await studentStorage.update(args.id, args.data);
      } catch (err) {
        return result;
      }
      return result;
    },
    async studentDelete(root, args, {studentStorage}) {
      let result = {};
      try {
        result = await studentStorage.delete(args.id);
      } catch (err) {
        return err;
      }
      return result;
    }
  }
};

module.exports = resolver;