import React from "react";

import { MenuContainer } from './styles';
import MenuButton from './components/MenuButton';

export default function Menu({ handleSendMessage }) {
  return (
    <MenuContainer className="animationShow">
      <MenuButton type="todo" handleSendMessage={handleSendMessage} />
      <MenuButton type="movies" handleSendMessage={handleSendMessage} />
      <MenuButton type="links" handleSendMessage={handleSendMessage} />
    </MenuContainer>
  )
}