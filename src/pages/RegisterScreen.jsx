import React from "react";
import styled from "styled-components";
import QuestionContainer from "../components/QuestionContainer";

export default function RegisterScreen() {
  return (
    <Container>
      <h1>First, let us know you better...</h1>
      <QuestionContainer />
      <h2>
        I am already a client. I want to <span>login</span>
      </h2>
    </Container>
  );
}

const Container = styled.div`
  background: var(--background-color);
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  span {
    font-weight: 500;
  }
`;
