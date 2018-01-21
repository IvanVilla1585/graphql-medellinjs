const resolver = {
  Query: {
    async courses(root, args, {courseStorage}) {
      let results = [];
      try {
        results = await courseStorage.find({});
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    },
    async courseById(root, args, {courseStorage}) {
      let result = {};
      try {
        result = await courseStorage.findById(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  },
  Mutation: {
    async courseAdd(root, args, {courseStorage}) {
      let result = {};
      try {
        result = await courseStorage.save({...args.data});
      } catch (err) {
        return result;
      }
      return result;
    },
    async courseEdit(root, args, {courseStorage}) {
      let result = {};
      try {
        result = await courseStorage.update(args.id, {...args.data});
      } catch (err) {
        return result;
      }
      return result;
    },
    async courseDelete(root, args, {courseStorage}) {
      let result = {};
      try {
        result = await courseStorage.delete(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  }
};

module.exports = resolver;