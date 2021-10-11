const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    rootDir: '/Users/sunhwalee/Documents/classting/__test__/',
    testEnvironment: 'jsdom',
    verbose: true,
    resetMocks: false,
  };
};
