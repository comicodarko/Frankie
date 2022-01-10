const express = require('express');
const webGetUnreadMessages = require('./controllers/webGetUnreadMessages');
const routes = express.Router();

const webSendMessage = require('./controllers/webSendMessage');

routes.post('/sendMessage', webSendMessage);
routes.get('/getMessages', webGetUnreadMessages);

module.exports = routes;