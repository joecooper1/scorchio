import styled from "styled-components";

const width = window.innerWidth;
const height = window.innerHeight;

export const Display = styled.div`
  width: ${(props) => {
    if (width >= 400) {
      return `360px`;
    } else return `${width}px`;
  }};
  height: ${(props) => {
    if (width >= 400) {
      return `640px`;
    } else return `${height}px`;
  }};
`;

export const WholeScreen = styled.div`
  background-color: hsl(227, 22%, 30%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
