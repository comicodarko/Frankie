const { MessageType, decryptMediaMessageBuffer } = require('@adiwajshing/baileys');
const fs = require('fs');

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
                        wpp.sendMessage(newMessage.key.remoteJid, res.message, MessageType.text, { quoted: newMessage });
                        wpp.clearMessage(newMessage.key);
                    });
                } else if(newMessage.message.conversation.toLocaleLowerCase().startsWith('!list')) {
                    loadContent(notion, newMessage.message.conversation).then(res => {
                        wpp.sendMessage(newMessage.key.remoteJid, res.message, MessageType.text, { quoted: newMessage });
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
				} else {
				}
            } else {
				if(newMessage.message) {
					console.log(newMessage);
					const id = newMessage.message.participant 
						? newMessage.message.participant 
						: newMessage.key.remoteJid
							&& newMessage.key.remoteJid;
					
					const text = newMessage.message.extendedTextMessage 
						? newMessage.message.extendedTextMessage.text
						: newMessage.message.conversation
							&& newMessage.message.conversation;   
					
					const type = newMessage.message.audioMessage ? 'audio' 
						: newMessage.message.stickerMessage ? 'sticker'
						: newMessage.message.imageMessage ? 'image' 
						: newMessage.message.documentMessage ? 'document'
						: newMessage.message.videoMessage ? 'video'
						: newMessage.message.locationMessage ? 'location' 
						: newMessage.message.groupInviteMessage && 'groupInvite'

					const message = {
						text, 
						id,
						type: type ? type : 'text' 
					}
					if(message.type === 'audio' || message.type === 'image' || message.type === 'video' || message.type === 'document') {
						// decryptMediaMessageBuffer(newMessage.message).then(buffer => {
						// 	fs.writeFileSync('/tmp', 'new', (err) => alert(err));
						// 	console.log(teste)
						// });
					}
				}
			}
        } 
    })
}