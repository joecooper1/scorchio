import styled, { css } from "styled-components";

const width = window.innerWidth;
const height = window.innerHeight;

export const Info = styled.main`
  margin-top: ${(props) => `${height * 0.1}px`};
  margin-left: ${(props) => `${width * 0.1}px`};
  width: ${(props) => `${width * 0.8}px`};
  height: ${(props) => `${height * 0.8}px`};
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const Temp = styled.p`
  font-size: 4em;
`;

export const City = styled.p`
  font-size: 1.5em;
`;
