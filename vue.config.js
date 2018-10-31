module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001/api',
        secure: false,
      },
    },
  },
};
