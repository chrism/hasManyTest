module.exports = function(app) {
  var express = require('express');
  var fileRouter = express.Router();
  fileRouter.post('/', function(req, res) {
    res.send({
      file: {
        id: 1,
        name: 'testname',
      }
    });
  });

  fileRouter.get('/1', function(req, res) {
    res.send({
      file: {
        id: 1,
        name: "testname",
        will: 1
      }
    });
  });
  app.use('/api/files', fileRouter);
};
