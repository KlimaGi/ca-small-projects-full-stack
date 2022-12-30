const resSend = require('../modules/universalRes');

module.exports = {

  setUser: async (req, res) => {
    const { username } = req.params;
    req.session.username = username;
    console.log('req.session.username', req.session.username);

    return resSend(res, false, `hi, ${username}`, null);
  },
  createPost: async (req, res) => {
    const { username } = req.session;
    console.log('username-createPost', req.session.username);

    if (username) {
      const { photo, title } = req.body;

      console.log('photo-title', photo, title);

      return resSend(res, true, 'ok', null);
    }

    return resSend(res, true, 'no user session', null);
  }

} 