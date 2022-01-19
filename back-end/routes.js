const express = require('express');
const newContent = require('./controllers/newContent');
const searchContent = require('./controllers/searchContent');
const webGetUnreadMessages = require('./controllers/webGetUnreadMessages');
const routes = express.Router();

const webSendMessage = require('./controllers/webSendMessage');

routes.post('/sendMessage', webSendMessage);
routes.post('/newContent', newContent);
routes.post('/searchContent', searchContent);
routes.get('/getMessages', webGetUnreadMessages);

module.exports = routes;