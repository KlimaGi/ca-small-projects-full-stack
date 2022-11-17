let messagesData = [];

module.exports = {
  createMessage: (req, res) => {
    messagesData.push(req.body);
    console.log('req.body', req.body);
    res.send(messagesData);
  },
  deleteMessage: (req, res) => {
    const { name, msg } = req.body;

    let temp = messagesData.filter((dbMessage) => dbMessage.name !== name && dbMessage.msg !== msg);
    messagesData = temp;

    res.send(messagesData);
  }

} 