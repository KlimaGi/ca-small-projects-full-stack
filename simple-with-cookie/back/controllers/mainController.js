const resSend = require('../modules/universalRes');
const session = require('express-session');
const store = new session.MemoryStore();

module.exports = {

  setColor: (req, res) => {

    req.session.color = req.params.color;
    console.log('req.session.color', req.session.color);

    console.log('store-set', store);

    req.session.save();
    return resSend(res, false, 'set color', { color: req.session.color });
  },
  getColor: (req, res) => {
    const color = req.session.color;
    console.log('req.session.color', req.session.color);
    console.log('store-get', store);

    return resSend(res, false, 'get color', { color });
  }

}