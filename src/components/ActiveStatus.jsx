import React from "react";
import styled from "styled-components";

export default function ActiveStatus({ type, length }) {
  if (length > 5) {
    length = "5+";
  }
  if (length === 0) {
    return <></>;
  }
  let iconColor;
  if (type === "critical") {
    iconColor = "#ee6b6e";
  }
  if (type === "urgent") {
    iconColor = "#fedebe";
  }
  if (type === "notUrgent") {
    iconColor = "#faf3c0";
  }

  return (
    <Container>
      <ActiveStatusIcon iconColor={iconColor}>
        <ion-icon name="hammer-outline" />
      </ActiveStatusIcon>
      <h1>{length}</h1>
    </Container>
  );
}

const Container = styled.div`
  transform: translate(-50%, 0);
  display: flex;
  margin-left: 5px;
  align-items: center;
  h1 {
    margin: 0 !important;
    color: black;
  }
  :hover {
    h1 {
      color: white;
    }
    ion-icon {
      color: white;
    }
  }
`;

const ActiveStatusIcon = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.iconColor};
  margin: 2px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    margin: 0 !important;
    text-align: center;
    font-size: 14px !important;
    color: black;
  }
`;
