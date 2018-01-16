const resolver = {
  Query: {
    courses(root, args, {curses}) {
      return curses;
    }
  }
};

module.exports = resolver;