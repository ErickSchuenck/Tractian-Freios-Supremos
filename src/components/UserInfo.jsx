import React from "react";
import styled from "styled-components";
import factoryVector from "../assets/factoryvector.jpg";
import worker from "../assets/worker.jpg";

export default function UserInfo() {
  return (
    <Container>
      <ProfilePicture img={worker}></ProfilePicture>
      <UserCoverImage img={factoryVector}></UserCoverImage>
      <Infos>
        <h1>Worker Name</h1>
        <h2>Worker Position</h2>
        <h1>Actions:</h1>
        <h2>Report Malfunctioning</h2>
        <h2>Make Request</h2>
        <h2>Check Unit Status</h2>
      </Infos>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 450px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const UserCoverImage = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50px;
  width: 100%;
`;

const ProfilePicture = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  border: 3px solid #fff;
  position: absolute;
  margin-top: 15px;
`;

const Infos = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    color: black;
    font-size: 18px;
  }
  h2 {
    color: gray;
    font-size: 14px;
  }
`;
