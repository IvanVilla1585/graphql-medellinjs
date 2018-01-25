const resolver = {
  Query: {
    async posts(root, args, {postStorage}) {
      let results = [];
      try {
        results = await postStorage.find();
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    },
    async search(root, args, {postStorage, commentStorage}) {
      let results = [];
      try {
        const resultsPost = await postStorage.find({body: {$regex: new RegExp(args.search, 'i')}});
        const resultsComments = await commentStorage.find({body: {$regex: new RegExp(args.search, 'i')}});
        results = [...resultsPost, ...resultsComments]
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    },
    async postById(root, args, {postStorage}) {
      let result = {};
      try {
        result = await postStorage.findById(args.id);
      } catch (err) {
        return result;
      }
      return result;
    }
  },
  Post: {
    async user({userId}, args, {userStorage}) {
      let result = {};
      try {
        result = await userStorage.findById(userId);
      } catch (err) {
        return result;
      }
      return result;
    },
    async comments({id}, args, {commentStorage}) {
      let result = [];
      try {
        result = await commentStorage.find({postId: id});
      } catch (err) {
        return result;
      }
      return result;
    }
  },
  Mutation: {
    async postAdd(root, args, {postStorage}) {
      let result = {};
      try {
        result = await postStorage.save({...args.data});
      } catch (err) {
        return result;
      }
      return result;
    }
  }
};

module.exports = resolver;