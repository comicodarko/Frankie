const searchGame = require('../components/tgdb/searchGame');

module.exports = (req, res) => {
	const { contentType, content } = req.body; 
	
	contentType === 'games' && searchGame(content).then(result => res.send(result));
}