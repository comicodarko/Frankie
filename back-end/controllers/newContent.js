const newMovie = require('../components/notion/movies/newMovie');
const newTodo = require('../components/notion/todo/newTodo');

module.exports = (req, res) => {
	const { contentType, content } = req.body; 

	contentType === 'movies' && newMovie(content).then(result => res.send({ message: result }));
	contentType === 'todo' && newTodo(content).then(result => res.send({ message: result }));	
}