const { MessageType } = require('@adiwajshing/baileys');
const newContent = require('../notion/newContent');
const { wpp } = require('./connect');

module.exports = (notion, from) => {
    // Acesso a online, bla bla bla
    wpp.on('chat-update', (chatUpdate) => {
        if(chatUpdate.messages) {
            const data = chatUpdate.messages.all()[0];
            console.log(data);
            if(data.key.fromMe && data.status >= 2 &&
            data.message.conversation.startsWith('[') && data.message.conversation.includes(']')) {
                newContent(notion, data.message.conversation).then(res => {
                    if(from === 'whatsapp') {
                        console.log(data);
                        wpp.sendMessage(data.key.remoteJid, res, MessageType.text, { quoted: data } );
                        wpp.clearMessage(data.key);
                    }  
                    // else {

                    // }
                });
            } else if(data.status === 2) {

            }
        }
    })
}