require('dotenv').config();
require('./components/ws');
const { Client: NotionClient} = require("@notionhq/client");
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const { connect, wpp } = require('./components/whatsapp/connect');
const onMessageCreate = require('./components/whatsapp/onMessageCreate');
const colors = require('./assets/colors');
const routes = require('./routes');

const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });
global.notion = notion;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

// connect().then(() => {
//     onMessageCreate(notion, 'whatsapp')
// }).catch (err => console.log("unexpected error: " + err))

app.listen(4000, () => 
    console.log(`${chalk.hex(colors.blue).bold(`${chalk.bgHex(colors.pink).hex(colors.black)(' 4000 ')} - API Web`)}`));