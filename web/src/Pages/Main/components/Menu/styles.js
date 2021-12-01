import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  min-height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuButton = styled.button`
  width: 3em;
  height: 3em;
  margin: 0 10px;
  cursor: pointer;
  background-color: #0000;
  border: none;
  border-radius: 5px;
  transition: ease-out .15s;
  
  &:hover {
    transition: ease-in .15s;
    padding-bottom: 20px;
  }
`