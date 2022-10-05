import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

export default function QuestionContainer() {
  return (
    <Container>
      <h1>I wish to register an...</h1>
      <StyledButton />
      <StyledButton />
      <StyledButton />
      <StyledButton />
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding-top: 15px;
  padding-bottom: 1500px;
  h1 {
    font-size: 20px;
    color: black;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
