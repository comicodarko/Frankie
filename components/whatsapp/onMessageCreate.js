const { MessageType } = require('@adiwajshing/baileys');

const { wpp } = require('./connect');
const loadContent = require('../notion/loadContent');
const newContent = require('../notion/newContent');

module.exports = (notion, from) => {
    // Acesso a online, bla bla bla
    wpp.on('chat-update', (chatUpdate) => {
        if(chatUpdate.messages) {
            const data = chatUpdate.messages.all()[0];
            if(data.status >= 2) {
                if(data.key.fromMe && data.message.conversation.startsWith('[') && data.message.conversation.includes(']')) {
                    newContent(notion, data.message.conversation).then(res => {
                        if(from === 'whatsapp') {
                            wpp.sendMessage(data.key.remoteJid, res, MessageType.text, { quoted: data });
                            wpp.clearMessage(data.key);
                        }  
                    });
                } else if(data.message.conversation.toLocaleLowerCase().startsWith('!list'))  {
                    loadContent(notion, data.message.conversation).then(res => {
                        if(from === 'whatsapp') {
                            wpp.sendMessage(data.key.remoteJid, res, MessageType.text, { quoted: data });
                            wpp.clearMessage(data.key);
                        }
                    })
                }
            }
        }
    })
}