const resolver = {
  Query: {
    async users(root, args, {userStorage}) {
      let results = [];
      try {
        results = await userStorage.find();
      } catch (err) {
        throw new Error('Error: find all posts');
      }
      return results;
    },
    async userById(root, args, {userStorage}) {
      let result = {};
      try {
        result = await userStorage.findById(args.id);
      } catch (err) {
        throw new Error('Error: find user by id');
      }
      return result;
    }
  },
  Mutation: {
    async userAdd(root, args, {userStorage}) {
      let result = {};
      try {
        result = await userStorage.save(args.data);
      } catch (err) {
        throw new Error('Error: save user');
      }
      return result;
    },
    async userDelete(root, args, {userStorage}) {
      let result = {};
      try {
        result = await userStorage.delete(args.id);
      } catch (err) {
        throw new Error('Error: delete user');
      }
      return result;
    }
  }
};

module.exports = resolver;