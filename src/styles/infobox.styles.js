import styled from "styled-components";

export const Info = styled.main`
  margin-top: ${(props) => `${props.height * 0.1}px`};
  margin-left: ${(props) => `${props.width * 0.1}px`};
  width: ${(props) => `${props.width * 0.8}px`};
  height: ${(props) => `${props.height * 0.8}px`};
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
`;

export const Temp = styled.p`
  font-size: 4em;
  margin-top: 30;
  margin-bottom: 0;
`;

export const City = styled.p`
  font-size: 1em;
  margin-top: 0;
`;

export const Image = styled.img``;
