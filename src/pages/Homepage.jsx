import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledButton from "../components/StyledButton";
import UserInfo from "../components/UserInfo";
import Units from "../components/Units";

export default function Homepage() {
  const units = [
    {
      name: "Unit1",
      status: "good",
      necessities: [
        {
          critical: [
            {
              id: 0,
              type: "other",
              details: "too much rain, factory is going underwater!!!!!!!!!",
            },
            {
              id: 1,
              type: "lack of resource",
              details: "we need more coal to keep burning the furnace!!!",
            },
          ],
          urgent: [
            {
              id: 2,
              type: "repair",
              details: "jorginho's hammer broke 😪",
            },
          ],
          notUrgent: [
            {
              id: 3,
              type: "repair",
              details:
                "maria is unhappy, please send her another kitten image...",
            },
          ],
        },
      ],
    },
  ];

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
