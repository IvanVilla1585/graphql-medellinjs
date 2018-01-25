const resolver = {
  Query: {
    async comments(root, args, {commentStorage}) {
      let results = [];
      try {
        results = await commentStorage.find();
      } catch (err) {
        console.log('err', err);
        return results;
      }
      return results;
    }
  },
  Comment: {
    async post({postId}, args, {postStorage}) {
      let result = {};
      if (!postId) return {};
      try {
        result = await postStorage.findById(postId);
      } catch (err) {
        return result;
      }
      console.log('post', result)
      return result;
    }
  },
  Subscription: {
    async commentAdd(root, args, {commentStorage, pubsub}) {
      let result = {};
      try {
        result = await commentStorage.save({...args.data});
        pubsub.publish('commentAdded', result);
      } catch (err) {
        return result;
      }
      return result;
    }
  }
};

module.exports = resolver;