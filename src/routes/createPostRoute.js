const router = require('express').Router();
// const renderTemplate = require('../lib/renderTamplates');
// const Main = require('../views/Main');

router.post('/', (req, res) => {
  // renderTemplate(Main, null, res);
  console.log('REQBODY', req.body);
  res.send('200');
});

module.exports = router;
