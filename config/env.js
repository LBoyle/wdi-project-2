module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/wdiproject2',
  port: process.env.PORT || 3000
};
