const router = require('express').Router();
const { User } = require('../../db/models');
// const renderTemplate = require('../lib/renderTamplates');
// const Main = require('../views/Main');

router.post('/in', async (req, res) => {
  const { setEmail, setPassword } = req.body;
  console.log('▶ ⇛ req.body', req.body);
  console.log('▶ ⇛ password', setPassword);
  console.log('▶ ⇛ email', setEmail);
  const loginUser = await User.findOne({ where: { email: setEmail } });
  console.log('▶ ⇛ loginUser', loginUser);
  // console.log('REQBODY----INLOGIN', (req.body));
  res.send('200');
});

module.exports = router;
