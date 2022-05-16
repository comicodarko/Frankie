import React, { useState, useRef, useEffect } from 'react';

import { Chat, Container } from './styles';
import ContentMessage from '../../components/ContentMessage';
import TextMessage from '../../components/TextMessage';
import Menu from '../../components/Menu';
import api from '../../services/api';

export default function Main() {
    const [frankieMessages, setFrankieMessages] = useState([{ message: 'Olá amigo.' }]);
    const [newMessage, setNewMessage] = useState('');

    const messagesEndRef = useRef(null);

    async function handleSendMessage(hiddenMessage, forceShowMessage) {
        setNewMessage('');
        hiddenMessage && console.log(hiddenMessage);
        if(hiddenMessage || newMessage.trim()) {
        const messageObj = {message: hiddenMessage ? hiddenMessage : newMessage, me: true};
        if(messageObj.message === '!clean' || messageObj.message === 'limpar' || messageObj.message === 'apagar') {
            setFrankieMessages([]);
            setTimeout(() => {
            setFrankieMessages([{ message: 'Tudo limpo 🤫' }]);
            }, 200);
        } else {
            let msgArray = [...frankieMessages];
            !hiddenMessage && msgArray.push(messageObj);
            setFrankieMessages(msgArray);
            try {
            const response = await api.post('/sendMessage', messageObj);
            if((response.data && !hiddenMessage) || (response.data && forceShowMessage)) {
                setFrankieMessages([...msgArray, response.data]);
            }
            } catch(e) {
            setFrankieMessages([...msgArray, { message: 'Não consigo ver o que tem a dizer. 😖' }]);
            console.log(e);
            }
        }
        }
    }

    async function handleSearchContent(type, search) {
        api.post('/searchExternalContent', {
            type,
            search
        })
    }

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [frankieMessages])

    return(
        <Container>
        <Menu handleSendMessage={handleSendMessage} />
        <Chat>
            {frankieMessages.map((messageObj, index) => {
            return messageObj.content && messageObj.content.length > 0
                ? <ContentMessage key={index} index={index} messageObj={messageObj} handleSendMessage={handleSendMessage} />
                : <TextMessage key={index} index={index} messageObj={messageObj} />
            })}
            <span ref={messagesEndRef} />
        </Chat>

        <input value={newMessage} onChange={e => {setNewMessage(e.target.value)}} 
            onKeyDown={(e => { e.key === 'Enter' && newMessage && handleSendMessage()})} />
        </Container>
    )
}