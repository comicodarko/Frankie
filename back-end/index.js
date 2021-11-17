require('dotenv').config();
const { Client: NotionClient} = require("@notionhq/client");

const { connect, wpp } = require('./components/whatsapp/connect');
const onMessageCreate = require('./components/whatsapp/onMessageCreate');

const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });

connect().then((frankie) => {
    onMessageCreate(notion, 'whatsapp');
}).catch (err => console.log("unexpected error: " + err))