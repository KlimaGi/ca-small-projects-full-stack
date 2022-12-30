const resSend = require('../modules/universalRes');
const session = require('express-session');
const store = new session.MemoryStore();

let sessionColor;

module.exports = {

  setColor: (req, res) => {

    req.session.color = req.params.color;
    console.log('req.session.color', req.session.color);

    // console.log('store-set', store);

    sessionColor = req.session.color;
    return resSend(res, false, 'set color', { color: req.session.color });
  },
  getColor: (req, res) => {
    const color = sessionColor;

    console.log('store-get', color);

    return resSend(res, false, 'get color', { color });
  }

} 