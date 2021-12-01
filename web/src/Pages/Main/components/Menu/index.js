import React from "react";
import { FcClapperboard, FcTodoList } from 'react-icons/fc';

import { MenuButton, MenuContainer } from './styles';

export default function Menu({handleSendMessage}) {
  
  return (
    <MenuContainer>
      <MenuButton onClick={() => handleSendMessage('!list todo', true)}>
        <FcTodoList size={35} />
      </MenuButton>

      <MenuButton onClick={() => handleSendMessage('!list movies', true)}>
        <FcClapperboard size={35} />
      </MenuButton>
    </MenuContainer>
  )
}