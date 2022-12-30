const isEmail = require('sane-email-validation');
const userSchema = require('../schemas/userSchema');
const sendRes = require('../modules/universalRes');

module.exports = {
  emailValid: (req, res, next) => {
    const { email } = req.body;
    if (!isEmail(email)) return sendRes(res, true, "wrong email", null);
    next();
  },

}