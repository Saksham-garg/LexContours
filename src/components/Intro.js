import React from "react";
import styled from "styled-components";
import Women from '../images/women.png'
import Animatedshapes from "./Animatedshapes";
const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 20px;
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Right = styled.div`
  width: 40%;
`;
const Title = styled.h1`
  width: 60%;
  display: flex;
  font-size: 60px;
`;
const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content:space-between;
  margin-top:25px;
  align-items:center;
`;
const Button = styled.button`
    padding:15px;
    background-color:darkblue;
    letter-spacing:2px;
    border-radius:9px;
    font-weight:bold;
    color:white;
    cursor:pointer;
    border:none;
`;
const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactNo = styled.span`
    font-weight:bold;
    color:#f0667d;

`;
const ContactQuery = styled.span`
    color:grey;
    margin-top:5px;
`;

const Introimg = styled.img`
    width:100%;
    height:100vh;
`
export default function Intro() {
  return (
    <Container>
      <Left>
        <Title>Artificial Intelligence in Law</Title>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa id
          tempore, veritatis ipsam consequatur facilis ipsa vitae.
        </Desc>
        <Info>
          <Button>START A PROJECT </Button>
          <ContactForm>
            <ContactNo>+91 9996619712</ContactNo>
            <ContactQuery>Contact us for any Query</ContactQuery>
          </ContactForm>
        </Info>
      </Left>
      <Right>
        <Introimg src={Women}></Introimg>
      </Right>
      <Animatedshapes></Animatedshapes>
    </Container>
  );
}
