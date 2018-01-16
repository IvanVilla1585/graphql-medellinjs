const resolver = {
  Query: {
    teachers(root, args, {data}) {
      return data;
    }
  }
};

module.exports = resolver;