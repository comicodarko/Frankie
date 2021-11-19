const express = require('express');
const routes = express.Router();

const webSendMessage = require('./controllers/webSendMessage');

routes.post('/sendMessage', webSendMessage);

module.exports = routes;