const { MessageType } = require('@adiwajshing/baileys');

const { wpp } = require('./connect');
const loadContent = require('../notion/loadContent');
const newContent = require('../notion/newContent');

module.exports = (notion, from) => {
    // Acesso a online, bla bla bla
    wpp.on('chat-update', (chatUpdate) => {
        if(chatUpdate.messages) {
            const newMessage = chatUpdate.messages.all()[0];
            if(newMessage.status >= 2) {
                if(newMessage.key.fromMe && newMessage.message.conversation.startsWith('[') && newMessage.message.conversation.includes(']')) {
                    newContent(notion, newMessage.message.conversation).then(res => {
                        if(from === 'whatsapp') {
                            wpp.sendMessage(newMessage.key.remoteJid, res, MessageType.text, { quoted: newMessage });
                            wpp.clearMessage(newMessage.key);
                        }  
                    });
                } else if(newMessage.message.conversation.toLocaleLowerCase().startsWith('!list'))  {
                    loadContent(notion, newMessage.message.conversation).then(res => {
                        if(from === 'whatsapp') {
                            wpp.sendMessage(newMessage.key.remoteJid, res, MessageType.text, { quoted: newMessage });
                            wpp.clearMessage(newMessage.key);
                        }
                    })
                }
            }
        }
    })
}