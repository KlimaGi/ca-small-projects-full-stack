const resSend = require('../modules/universalRes');

module.exports = {

  setColor: async (req, res) => {

    req.session.color = req.params.color;

    return resSend(res, false, 'set color', color);
  },
  getColor: async (req, res) => {
    const color = req.session.color;

    return resSend(res, false, 'get color', color);
  }

}