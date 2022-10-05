import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledButton from "../components/StyledButton";
import UserInfo from "../components/UserInfo";
import Units from "../components/Units";

export default function Homepage() {
  const units = [{ name: "unit1", status: "good" }];

  return (
    <Container>
      <UserInfo />
      <UnitsContainer>
        {units.map((unit) => (
          <Units unit={unit} />
        ))}
      </UnitsContainer>
    </Container>
  );
}

const Container = styled.div`
  background: var(--background-color);
  padding-right: 20px;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  height: 100vh;
  width: 100vw;
  span {
    font-weight: 500;
  }
`;

const UnitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  max-height: 450px;
`;

const Box = styled.div`
  margin-top: 20px;
  max-width: 600px;
`;
