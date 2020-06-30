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
  color: ${(props) => `${props.color}`};
`;

export const Temp = styled.p`
  font-size: 4em;
  margin-top: 30;
  margin-bottom: 0;
`;

export const City = styled.input`
  font-size: 1em;
  border: 0;
  width: 150px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
`;

export const Image = styled.img``;

export const Time = styled.p`
  margin-top: 0;
`;

export const CityContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-left: 20px;
`;

export const Pencil = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
`;
