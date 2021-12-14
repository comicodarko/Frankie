import React, { useEffect, useState } from "react";
import { FcClapperboard, FcTodoList, FcSms, FcLink } from 'react-icons/fc';
import { BsPlusSquare } from 'react-icons/bs';
import { CgSearchLoading } from 'react-icons/cg';

import api from "../../../../services/api";
import { MenuButton, MenuContainer } from './styles';
import AddInput from "./components/AddInput";

export default function Menu({handleSendMessage}) {
  const [showInput, setShowInput] = useState('');
  const [input, setInput] = useState('')

  function handleAction(key, action) {
    if(key === 'Escape') {
      setShowInput('');
      setInput('');
    } else if(key === 'Enter')  {
      console.log(action);
      handleSendMessage(`[${action}] ${input}`, true);
      setShowInput('');
      setInput('');
    }
  }

  useEffect(() => {
    const listener = window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setShowInput('');
    })

    return () => {
      window.removeEventListener('keydown', listener);
    }
  }, []);
  
  return (
    <MenuContainer className="animationShow">
      <MenuButton>
        <FcTodoList size={35} />
          {showInput === 'todo'
            ? <AddInput label="Nova Tarefa" value={input} handleAction={handleAction} 
              setValue={setInput} setShowInput={setShowInput} action='todo' />
            : <>
              <span className="action animationLeft" onClick={() => setShowInput('todo')} >
                  <BsPlusSquare size={30} />
              </span>
              <span className="action animationRight" style={{ top: '170%' }}
                onClick={() => handleSendMessage('!list todo', true)}>
                <CgSearchLoading size={30} />
              </span>
            </>}
      </MenuButton>

      <MenuButton>
        <FcClapperboard size={35} />
        {showInput === 'movies'
          ? <AddInput label="Novo Filme" value={input} handleAction={handleAction} 
            setValue={setInput} setShowInput={setShowInput} action="movies" />
          : <>
            <span className="action animationLeft" onClick={() => setShowInput('movies')} >
              <BsPlusSquare size={30} />
            </span>
            <span className="action animationRight" style={{ top: '170%' }}
              onClick={() => handleSendMessage('!list movies', true)}>
              <CgSearchLoading size={30} />
            </span>
          </>}
      </MenuButton>
      
      <MenuButton>
        <FcLink size={35} />
        {showInput === 'links'
          ? <AddInput label="Novo Link" value={input} handleAction={handleAction} 
            setValue={setInput} setShowInput={setShowInput} action="links" />
          : <>
            <span className="action animationLeft" onClick={() => setShowInput('links')} >
              <BsPlusSquare size={30} />
            </span>
            <span className="action animationRight" style={{ top: '170%' }}
              onClick={() => handleSendMessage('!list links', true)}>
              <CgSearchLoading size={30} />
            </span>
          </>}
      </MenuButton>

      {/* <MenuButton onClick={() => {api.get('/getMessages').then(t => console.log(t))}}>
        <FcSms size={35} />
      </MenuButton> */}
    </MenuContainer>
  )
}