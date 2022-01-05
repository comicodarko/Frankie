import styled from "styled-components"

export const MenuButton = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  margin: 0 10px;
  cursor: pointer;
  background-color: #0000;
  border: none;
  transition: ease-out .15s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .action {
    display: none;
    background-color: var(--purple);
    color: #fff;
    top: 90%;
    text-align: center;
    position: absolute;
    padding: 5px 20px;

    &:hover {
      background-color: var(--pink);
    }
  }

  &:hover .action {
    transition: 1s;
    display: inline-block;
  }

  &:hover {
    transition: ease-in .15s;
    padding-bottom: 10px;
  }
`