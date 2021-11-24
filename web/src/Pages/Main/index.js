import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Chat, Container, Input } from './styles';
import ContentMessage from './components/ContentMessage';
import TextMessage from './components/TextMessage';

export default function Main() {
  const [frankieMessages, setFrankieMessages] = useState([{ message: 'Olá amigo.' }]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  async function handleSendMessage() {
    setNewMessage('');
    if(newMessage.trim()) {
      const messageObj = {message: newMessage, me: true};
      if(messageObj.message === '!clean' || messageObj.message === 'limpar' || messageObj.message === 'apagar') {
        setFrankieMessages([]);
        setTimeout(() => {
          setFrankieMessages([{ message: 'Tudo limpo 🤫' }]);
        }, 200);
      } else {
        let msgArray = [...frankieMessages];
        msgArray.push(messageObj);
        setFrankieMessages(msgArray);
        try {
          const response = await axios.post('http://127.0.0.1:4000/sendMessage', messageObj);
          response.data && setFrankieMessages([...msgArray, response.data]);
        } catch(e) {
          setFrankieMessages([...msgArray, { message: 'Não consigo ver o que tem a dizer. 😖' }]);
        }
      }
    }
  }

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [frankieMessages])

  return(
    <Container className="animationLeft">
      <Chat>
        {frankieMessages.map((messageObj, index) => {
          return messageObj.content
            ? <ContentMessage key={index} index={index} messageObj={messageObj} />
            : <TextMessage key={index} index={index} messageObj={messageObj} />
        } 
        )}
        <div ref={messagesEndRef} />
    </Chat>

    <Input value={newMessage} onChange={e => {setNewMessage(e.target.value)}} 
    onKeyDown={(e => { e.key === 'Enter' && newMessage && handleSendMessage()})} />
  </Container>
  )
}