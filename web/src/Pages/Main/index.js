import React, { useContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Chat, Container, Input, Message } from './styles';

export default function Main() {
  const [frankieMessages, setFrankieMessages] = useState([{ message: 'Olá amigo.' }]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  async function handleSendMessage() {
    const messageObj = {message: newMessage, me: true};
    setNewMessage('');
    if(messageObj.message === '!clean') {
      setFrankieMessages([]);
      setTimeout(() => {
        setFrankieMessages([{ message: 'Tudo limpo 🤫' }]);
      }, 200);
    } else {
      setFrankieMessages([...frankieMessages, messageObj]);
      const response = await axios.post('http://127.0.0.1:4000/sendMessage', messageObj);
      console.log(response.data);
    }
  }

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [frankieMessages])

  return(
    <Container className="animationLeft">
      <Chat>
        {frankieMessages.map((messageObj, index) => {
          const array = messageObj.message.replace(/\*/g, '').split('\n');
          return (
            <Message me={messageObj.me} length= {messageObj.message.length} key={index} className="animationLeft">
              {array.map((element, index) => (
                <React.Fragment key={index}>
                  {element}
                  <br />
                </React.Fragment>
              ))}
            </Message>
          )
        } 
        )}
        <div ref={messagesEndRef} />
    </Chat>

    <Input value={newMessage} onChange={e => {setNewMessage(e.target.value)}} 
    onKeyDown={(e => { e.key === 'Enter' && newMessage && handleSendMessage()})} />
  </Container>
  )
}