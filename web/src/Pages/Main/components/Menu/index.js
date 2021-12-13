import React, { useEffect, useState } from "react";
import { FcClapperboard, FcTodoList, FcSms } from 'react-icons/fc';
import { BsPlusSquare } from 'react-icons/bs';
import { CgSearchLoading } from 'react-icons/cg';

import api from "../../../../services/api";
import { MenuButton, MenuContainer, MenuInput } from './styles';

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
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setShowInput('');
    })

    return () => {
      window.removeEventListener('keydown');
    }
  }, []);
  
  return (
    <MenuContainer className="animationShow">
      <MenuButton>
        <FcTodoList size={35} />
          {showInput === 'todo'
            ? <span className="action animationLeft">
                <MenuInput className="animationShow" autoFocus 
                  value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={(e => handleAction(e.key, 'todo'))} 
                  onBlur={() => setShowInput('')} />
              </span>
            : <>
              <span className="action animationLeft" onClick={() => setShowInput('todo')} >
                  <BsPlusSquare size={30} />
              </span>
              <span className="action animationRight" style={{ top: '170%' }}
                onClick={() => handleSendMessage('!list todo', true)}>
                <CgSearchLoading size={30} />
              </span>
            </> 
          }
      </MenuButton>

      <MenuButton>
        <FcClapperboard size={35} />
        {showInput === 'movies'
          ? <span className="action animationShow">
              <MenuInput className="animationShow" autoFocus 
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={(e => handleAction(e.key, 'movies'))} 
                onBlur={() => setShowInput('')} />
            </span>
          : <>
            <span className="action animationLeft" onClick={() => setShowInput('movies')} >
              <BsPlusSquare size={30} />
            </span>
            <span className="action animationRight" style={{ top: '170%' }}
              onClick={() => handleSendMessage('!list movies', true)}>
              <CgSearchLoading size={30} />
            </span>
          </>
        }
      </MenuButton>

      {/* <MenuButton onClick={() => {api.get('/getMessages').then(t => console.log(t))}}>
        <FcSms size={35} />
      </MenuButton> */}
    </MenuContainer>
  )
}