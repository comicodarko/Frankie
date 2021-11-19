const { MessageType } = require('@adiwajshing/baileys');

const { wpp } = require('./connect');
const loadContent = require('../notion/loadContent');
const newContent = require('../notion/newContent');
const sticker = require('./sticker');

module.exports = (notion) => {
    wpp.on('chat-update', (chatUpdate) => {
        if(chatUpdate.messages) {
            const newMessage = chatUpdate.messages.all()[0];
            if(newMessage.status >= 2) {
                if(newMessage.key.fromMe && newMessage.message.conversation.startsWith('[') && newMessage.message.conversation.includes(']')) {
                    newContent(notion, newMessage.message.conversation).then(res => {
                        wpp.sendMessage(newMessage.key.remoteJid, res, MessageType.text, { quoted: newMessage });
                        wpp.clearMessage(newMessage.key);
                    });
                } else if(newMessage.message.conversation.toLocaleLowerCase().startsWith('!list')) {
                    loadContent(notion, newMessage.message.conversation).then(res => {
                        wpp.sendMessage(newMessage.key.remoteJid, res, MessageType.text, { quoted: newMessage });
                        wpp.clearMessage(newMessage.key);
                    })	
                } else if(newMessage.message.imageMessage && 
				(newMessage.message.imageMessage.caption.toLocaleLowerCase() === '!sticker' 
				|| newMessage.message.imageMessage.caption.toLocaleLowerCase() === '!figurinha'
				|| newMessage.message.imageMessage.caption.toLocaleLowerCase() === '!s')) {
					wpp.downloadMediaMessage(newMessage).then(media => {
						sticker(media).then(res => {
							wpp.sendMessage(newMessage.key.remoteJid, res, MessageType.sticker, { quoted: newMessage })
						})
					});
				}
            }
        }
    })
}