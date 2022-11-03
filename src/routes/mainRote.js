const router = require('express').Router();
const renderTemplate = require('../lib/renderTamplates');
const Main = require('../views/Main');

router.get('/', (req, res) => {
  renderTemplate(Main, null, res);
});

module.exports = router;
