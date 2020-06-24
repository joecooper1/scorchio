import styled from "styled-components";

export const OptionsBox = styled.nav`
  margin: 20px;
  background-color: black;
  width: ${(props) => {
    return `${props.width - 400}px`;
  }};
  max-width: 400px;
  height: ${(props) => `${props.height * 0.9}px`};
  padding: 10px;
  color: white;
`;

export const WeatherOptionBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 150px;
`;

export const LocationOptionBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 150px;
  margin-bottom: 20px;
`;

export const TimeOptionBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 20px;
`;

export const NumberInput = styled.input`
  width: 50px;
  border: 1px solid black;
`;

export const OrString = styled.p`
  margin: 0px;
`;
