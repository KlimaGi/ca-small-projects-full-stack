const resSend = require('../modules/universalRes');

module.exports = {

  setColor: async (req, res) => {

    req.session.color = req.params.color;

    return resSend(res, false, 'set color');
  },
  getColor: async (req, res) => {
    console.log('req.session.color', req.session.color);
    const color = req.session.color;

    return resSend(res, false, 'get color', color);
  }

}