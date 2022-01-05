import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--black);
  border: 2px solid var(--pink);
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  flex-wrap: wrap;
  width: 500px;
  position: absolute;
  top: 90%;
  
  span {
    background: var(--purple);
    padding: 10px 5px;
    margin: 0 10px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 0.7em;
    transition: ease-out 1s;

    &:hover {
      transition: ease-in .15s;
      background: var(--pink);
    }
  }
` 