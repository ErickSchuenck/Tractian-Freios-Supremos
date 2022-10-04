import React from "react";
import styled from "styled-components";

export default function StyledButton({ text }) {
  return (
    <Container>
      <h3>{text}</h3>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 40px;
  background-color: #16a34a;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.5s;
  :hover {
    background-color: #24d365;
  }
`;
