import styled from "styled-components";

export const OptionsBox = styled.nav`
  margin: 20px;
  background-color: pink;
  width: ${(props) => {
    return `${props.width - 400}px`;
  }};
  max-width: 400px;
  height: ${(props) => `${props.height * 0.9}px`};
`;
