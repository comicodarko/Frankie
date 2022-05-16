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