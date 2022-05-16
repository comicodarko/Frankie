const newContent = require('../components/notion/newContent');
const loadContent = require('../components/notion/loadContent');
const updateContent = require('../components/notion/updateContent');

module.exports = (req, res) => {
	const { message } = req.body; 

	if(message.startsWith('[') && message.includes(']')) {
		newContent(global.notion, message).then(result => {
			res.send({ message: result });
		});
	} else if(message.toLocaleLowerCase().startsWith('!list') || message.toLocaleLowerCase().startsWith('!l ')) {
		loadContent(global.notion, message).then(result => {
			res.send(result);
		})	
	} else if(message.toLocaleLowerCase().startsWith('!edit')) {
		updateContent(global.notion, message).then(result => {
			res.send({ message: result });
		})
	}
 }