import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { CgSearchLoading } from "react-icons/cg";
import { FcClapperboard, FcLink, FcTodoList, FcSteam } from "react-icons/fc";
import Filters from '../Filters';

import AddInput from "../AddInput";
import { MenuButton as Button } from './styles';

export default function MenuButton({ type, handleSendMessage }) {
  const [showFilters, setShowFilters] = useState('');
  const [showInput, setShowInput] = useState('');
  const [input, setInput] = useState('');

  function handleActionAdd(key, action) {
    if(key === 'Escape') {
      setShowInput('');
      setInput('');
    } else if(key === 'Enter') {
      console.log(action);
      handleSendMessage(`[${action}] ${input}`, true);
      setShowInput('');
      setInput('');
    }
  }

  function handleActionFilter(contentName, filter) {
    handleSendMessage(`!list ${contentName} ${filter ? filter : ''}`.trim(), true);
  }

  const label = 
      type === 'todo' ? 'Nova Tarefa' 
    : type === 'movies' ? 'Novo Filme'
    : type === 'links' ? 'Novo Link'
    : type === 'games' && 'Novo Jogo'

  return (
    <Button>
      {type === 'todo' && <FcTodoList size={35} />}
      {type === 'movies' && <FcClapperboard size={35} />}
      {type === 'links' && <FcLink size={35} />}
      {type === 'games' && <FcSteam size={35} />}
        {showInput &&
          <AddInput label={label} value={input} handleActionAdd={handleActionAdd} 
            setValue={setInput} setShowInput={setShowInput} action={type} />
        }
        {showFilters &&
          <Filters filterType={type} 
            handleActionFilter={handleActionFilter} 
            setShowFilters={setShowFilters}
          />
        }
        {!showInput && !showFilters &&
          <>
            <span className="action animationLeft" onClick={() => setShowInput(type)} >
              <BsPlusSquare size={30} />
            </span>
            <span className="action animationRight" style={{ top: '175%' }}
              onClick={() => setShowFilters(type)}>
              <CgSearchLoading size={30} />
            </span>
          </>
        } 
    </Button>
  )
}