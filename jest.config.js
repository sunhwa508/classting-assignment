module.exports = async () => {
  return {
    rootDir: '/Users/sunhwalee/Documents/classting/__test__/',
    testEnvironment: 'jsdom',
    verbose: true,
    resetMocks: false,
    transformIgnorePatterns: [
      '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
    ],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };
};
