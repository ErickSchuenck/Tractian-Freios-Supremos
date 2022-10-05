import React from "react";
import styled from "styled-components";
import gear from "../assets/gear.gif";

export default function Units({ unit }) {
  let statusColor;
  if (unit.status === "good") {
    statusColor = "green";
  }

  return (
    <Container>
      <Left status={statusColor}>
        <UnitPicture img={gear} alt={"gear"}></UnitPicture>
      </Left>
      <Right>
        <h1>{unit.name}</h1>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 20px;
  h1 {
    color: black;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Left = styled.div`
  background-color: url(${(props) => props.status});
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
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
