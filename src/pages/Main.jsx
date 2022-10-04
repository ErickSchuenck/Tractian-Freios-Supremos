import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledButton from "../components/StyledButton";

export default function Main() {
  return (
    <Container>
      <Logo />
      <Box>
        <h1>Your tool to manage companies, units, assets and users.</h1>
      </Box>
      <Box>
        <h2>
          <span>How it works?</span> Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s...
        </h2>
      </Box>
      <StyledButton text={"Register"}></StyledButton>
      <Box>
        <h2>
          Already a client? <span>Click here to login</span>
        </h2>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  background: var(--background-color);
  padding-right: 20px;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  span {
    font-weight: 500;
  }
`;

const Box = styled.div`
  margin-top: 20px;
  max-width: 600px;
`;
