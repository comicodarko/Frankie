import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20vw;
  max-height: 90vh;

  @media(max-width: 800px) {
    padding: 0;
  }
`

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
  min-height: 70vh;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  padding: 10px;
  max-width: 70%;
  justify-content: space-between;
  line-height: 1.25rem;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-left: ${props => props.me ? 'auto' : '0'};
  margin-right: ${props => props.me ? '0' : 'auto'};
  background-color: ${props => props.me ? 'var(--pink)' : 'var(--blue)'};
`

export const MessageTitle = styled.h1`
  font-size: 1.1em;
  color: var(--pink);
  text-align: center;
  margin-bottom: 10px;
`

export const MessageRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  border-radius: 2px;
  transition: ease-in-out, 0.15s;
  text-decoration: ${props => props.watched ? 'line-through' : 'none'};
  color: ${props=> props.watched ? 'var(--gray)' : '#fff'};
  
  &:hover {
    transition: ease-in, 0.15s;
    background-color: var(--purple);
  }
`

export const MessageButtonsArea = styled.div`
  height: 100%;
  margin-right: 5px;
  display: flex;
`

export const MessageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin: 0 5px;

  .btnDelete, .btnCheck {
    transition: ease-in-out, 0.5s;
  }
  
  .btnDelete:hover {
    stroke: var(--red);
    transition: ease-in-out, 0.5s;
  }

  .btnCheck:hover {
    stroke: var(--green);  
    transition: ease-in-out, 0.5s;
  }
`

export const Input = styled.input`
  padding: 10px;
  display: flex;
  min-width: 20%;
  max-width: 80%;
  margin: 20px auto;
  border: 3px solid var(--purple);
  border-radius: 5px;
  outline: none;
  color: var(--black);
  text-align: center;
  font-size: 1.1rem;

  &:active, &:hover, &:focus {
    transition: 1s;
    border: 3px solid var(--pink);  
  }
`