const resolver = {
  Query: {
    async teachers(root, args, {teacherStorage}) {
      let results = [];
      try {
        results = await teacherStorage.find({});
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    },
    async teacherById(root, args, {teacherStorage}) {
      let result = {};
      try {
        result = await teacherStorage.findById(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  },
  Mutation: {
    async teacherAdd(root, args, {teacherStorage}) {
      let result = {};
      try {
        result = await teacherStorage.save(args.data);
      } catch (err) {
        return result;
      }
      return result;
    },
    async teacherEdit(root, args, {teacherStorage}) {
      let result = {};
      try {
        result = await teacherStorage.update(args.id, args.data);
      } catch (err) {
        return result;
      }
      return result;
    },
    async teacherDelete(root, args, {teacherStorage}) {
      let result = {};
      try {
        result = await teacherStorage.delete(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  }
};

module.exports = resolver;