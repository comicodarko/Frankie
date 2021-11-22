import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10vh 20vw;
  max-height: 90vh;
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
  width: 100%;
  max-width: 100%;
`

export const Message = styled.div`
  display: flex;
  word-break: break-word;
  padding: 10px;
  max-width: 70%;
  line-height: 1.25rem;
  margin-bottom: 10px;
  margin-left: ${props => props.me ? 'auto' : '0'};
  margin-right: ${props => props.me ? '0' : 'auto'};
  background-color: ${props => props.me ? 'var(--pink)' : 'var(--blue)'};
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