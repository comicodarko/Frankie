const { wpp } = require("../components/whatsapp/connect");

module.exports = (req, res) => {
	console.log(wpp.lastChatsReceived);
	res.send('hello friend');
}