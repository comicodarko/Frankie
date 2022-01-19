const searchGame = require('../components/tgdb/searchGame');

module.exports = (req, res) => {
	const { type, search } = req.body; 
	type === 'games' && searchGame(search);
}