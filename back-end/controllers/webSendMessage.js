const newContent = require('../components/notion/newContent');
const loadContent = require('../components/notion/loadContent');

module.exports = (req, res) => {
	const { message } = req.body; 

	if(message.startsWith('[') && message.includes(']')) {
		newContent(global.notion, message).then(result => {
			res.send({ message: result });
		});
	} else if(message.toLocaleLowerCase().startsWith('!list')) {
		loadContent(global.notion, message).then(result => {
			res.send({ message: result });
		})	
	}
}