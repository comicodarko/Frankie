const { WAConnection, ReconnectMode, ChatModification } = require('@adiwajshing/baileys');
const chalk = require('chalk');
const fs = require('fs');
const { resolve } = require('path');

const SESSION_FILE_PATH = resolve(__dirname, '..', '..', 'session.json');
const colors = require('../../assets/colors');

const wpp = new WAConnection();

async function connect() {
    wpp.autoReconnect = ReconnectMode.onConnectionLost;

    if(fs.existsSync(SESSION_FILE_PATH)) {
        wpp.loadAuthInfo(SESSION_FILE_PATH);
        await wpp.connect().then(infos => {
            setTimeout(() => {
                console.log(chalk.bgHex(colors.blue).hex(colors.black)(' Sessão Iniciada! '));
                console.log(`Bem vindo ${chalk.hex(colors.pink)(infos.user.name)}`);
            }, 1000);
        });
    } else {
        wpp.on('open', () => {
            const authInfo = wpp.base64EncodedAuthInfo();
            fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'));
            console.log(chalk.bgHex(colors.blue).hex(colors.black)(' Informações de sessão salva! '));
        })
        await wpp.connect();
    }
    
    wpp.on('initial-data-received', async (e) => {
		console.log(e);
        const chats = Object.values(wpp.chats.dict);
        const frankie = chats.find(chat => chat.name === '🤖 Frankie 🤖');
        await wpp.modifyChat(frankie.jid, ChatModification.clear);
    });

    // wpp.on('contact-update', (contact) => {
    //     console.log('CONTATO MUDOU!');
    //     console.log(contact);
    // });

    wpp.on('close', (err) => console.log(chalk.bgHex(colors.red)(' WPP Desconectado! '), chalk.hex(colors.red)(err.reason)))  
    wpp.on('ws-close', (err) => console.log(chalk.bgHex(colors.red)(' WPP WS Encerrado! '), chalk.hex(colors.red)(err.reason)))  
}

module.exports = {
    connect, wpp 
}