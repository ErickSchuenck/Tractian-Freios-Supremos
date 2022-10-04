import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <ion-icon name="cog" />
      TracManager
    </Container>
  );
}

const Container = styled.div`
  font-size: 55px;
  font-family: var(--logo-font);
  display: flex;
  align-items: center;
  user-select: none;
`;
