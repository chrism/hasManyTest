module.exports = function(app) {
  var express = require('express');
  var willRouter = express.Router();
  willRouter.get('/1', function(req, res) {
    res.send({
      will: {
      id: 1,
      title: "test"
      }
    });
  });
  app.use('/api/wills', willRouter);
};
