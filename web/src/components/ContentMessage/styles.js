import styled from "styled-components";

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

export const MessageTitle = styled.p`
  font-size: 1.2em;
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
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  color: ${props=> props.checked ? 'var(--gray)' : '#fff'};
  
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