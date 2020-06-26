const routes = require('express').Router();

const authMid = require('./app/middlewares/auth');

routes.get('/', (req, res) => {
  res.json({ msg: 'API OK!' });
});

routes.use(authMid);

module.exports = routes;
