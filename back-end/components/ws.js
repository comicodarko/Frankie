require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const { Server } = require('http');
const io = require('socket.io');

const colors = require('../assets/colors');
const getGenres = require('./notion/movies/getGenres');
const getLinkTypes = require('./notion/links/getLinkTypes');
const getTodoTypes = require('./notion/todo/getTodoTypes');
const app = express();
const wsServer = Server(app);

const ws = io(wsServer);

wsServer.listen(5000, () =>
    console.log(`${chalk.hex(colors.blue).bold(`${chalk.bgHex(colors.pink).hex(colors.black)(' 5000 ')} - WebSocket`)}`));

ws.on('connection', (e) => {
	console.log(`${chalk.bgHex(colors.green).hex(colors.black).bold('WS conectado!')}`)
	getGenres(global.notion, process.env.NOTION_MOVIES)
		.then(genres => {ws.emit('information', {type: 'movieGenres', content: genres})});

	getLinkTypes(global.notion, process.env.NOTION_LINKS)
		.then(linkTypes => {ws.emit('information', {type: 'linkTypes', content: linkTypes})});

	getTodoTypes(global.notion, process.env.NOTION_TODO)
		.then(todoTypes => {ws.emit('information', {type: 'todoTypes', content: todoTypes})});
});

module.exports = ws;