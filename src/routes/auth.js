const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { User } = require('../../db/models');
// const renderTemplate = require('../lib/renderTamplates');
// const Main = require('../views/Main');
const app = express();

router.post('/in', async (req, res) => {
  const { setEmail: email, setPassword: password } = req.body;
  // const password = req.body.setPassword;

  console.log('▶ ⇛ req.body', req.body);
  console.log('▶ ⇛ email', email);
  console.log('▶ ⇛ password', password);

  const loginUser = await User.findOne({ where: { email } });
  // console.log('▶ ⇛ loginUser', loginUser.dataValues);
  if (loginUser) {
    const isUserAuth = await bcrypt.compare(password, loginUser.password);
    if (isUserAuth) {
      req.session.username = loginUser.name;
      req.session.field = 'FIELD';
      console.log('▶ ⇛ req.session.field', req.session.field);
      console.log('▶ ⇛ req.session.username', req.session.username);
      res.status(200);
      res.json({ user: loginUser.name });
    }
  }
});
router.get('/in', async (req, res) => {
  console.log('▶ ⇛ app.locals.user', app.locals.user);
  res.send('200');
});
// router.get('/', async (req, res) => {
//   const { userr } = req.app.locals;
//   console.log('▶ ⇛ userr', userr);
//   // const resul = await app.get();
//   // console.log('APP-GET------>', resul);
//   console.log('▶ ⇛ app.locals', req.app.locals);
//   console.log('▶ ⇛ app.locals.agge', req.app.locals?.agge);
//   console.log('▶ ⇛ app.locals.user', req.app.locals?.user);
//   console.log('▶ ⇛ locals.SETTUNG.titleApp', req.app.settings.title);
//   // console.log('▶ ⇛ locals.SETTUNG.user', app.get('titleApp'));
//   // res.locals.userto = 'User Get';
//   res.send(res.locals);
// });

module.exports = router;
