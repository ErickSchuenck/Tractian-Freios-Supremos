import React from "react";
import styled from "styled-components";
import gear from "../assets/gear.gif";

export default function Units({ unit }) {
  let demandImportance;
  let statusColor;
  if (unit.status === "good") {
    statusColor = "#bee4be";
  }
  if (unit.status === "in need of attention") {
    statusColor = "#e0e4be";
  }
  if (unit.status === "critical") {
    statusColor = "#e4bebe";
  }

  return (
    <Container>
      <Left status={statusColor}>
        <UnitPicture img={gear} alt={"gear"}></UnitPicture>
        <ActiveStatusRow>
          {unit.necessities.map((status) => (
            <ActiveStatus status={"#fff"}>
              <ion-icon name="hammer-outline" />
            </ActiveStatus>
          ))}
        </ActiveStatusRow>
      </Left>

      <Right>
        <h1>{unit.name}</h1>
        <h3>{unit.status}</h3>
        <Icons>
          <ion-icon name="bar-chart-outline" />
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="alert-circle-outline"></ion-icon>
        </Icons>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  min-height: 80px;
  border-radius: 10px;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 20px;
  ion-icon {
    font-size: 20px;
    color: black;
    margin-left: 10px;
    margin-top: 3px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      color: #994343;
    }
  }
  h1 {
    color: black;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 10px;
    margin-right: 10px;
  }
  h3 {
    color: black;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const ActiveStatusRow = styled.div`
  position: absolute;
`;

const ActiveStatus = styled.div`
  transform: translate(-50%, 0);
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.status};
  margin: 2px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: black;
    :hover {
      transform: none;
      color: black;
    }
  }
`;

const Icons = styled.div`
  display: flex;
`;

const Left = styled.div`
  background-color: ${(props) => props.status};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  position: relative;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const UnitPicture = styled.div`
  height: 62px;
  width: 62px;
  padding-right: 54px;
  border-radius: 5px;
  background: url(${(props) => props.img});
  background-size: cover;
`;
