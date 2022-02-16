import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import api from './services/api';
import colors from './assets/colors';
import Input from './components/Input';
import Menu from './components/Menu';
import Chat from './components/Chat';
import Modal from './components/Modal';

export default function App() {
  const [showInput, setShowInput] = useState(false);
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('');
  const [label, setLabel] = useState('');
  const [request, setRequest] = useState({
    type: '',
    contentType: '',
    content: '',
  });
  const [messages, setMessages] = useState([
    {message: 'Olá Amigo.', frankie: true},
  ]);
  const inputRef = useRef(null);

  const handleShowInput = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 500);
  };
  const handleHiddenInput = () => setShowInput(false);

  async function handleRequest() {
    handleHiddenInput();
    if (content.trim()) {
      const obj = {...request, content};
      const array = [...messages, {message: `${label}: ${content}`}];
      setMessages(array);
      setContent('');
      const response =
        request.type === 'new'
          ? await api.post('/newContent', obj)
          : request.type === 'search'
          ? await api.post('/searchContent', obj)
          : request.type === 'load' && (await api.post('/loadContent', obj));

      setMessages([...array, {...response.data, frankie: true}]);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.pink}
        animated
      />
      <Modal isVisible={modal} setIsVisible={setModal} />

      <Menu
        handleShowInput={handleShowInput}
        setLabel={setLabel}
        setRequest={setRequest}
      />
      <Chat messages={messages} setModal={setModal} />
      {showInput && (
        <Input
          refer={inputRef}
          label={label}
          handleRequest={handleRequest}
          value={content}
          setValue={setContent}
        />
      )}
    </SafeAreaView>
  );
}
