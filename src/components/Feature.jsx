import React from "react";
import styled from "styled-components";
import appimg from "../images/appimg.png";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content:center;
`;
const Phoneimg = styled.img`
  width: 80%;
`;
const Title = styled.span`
  font-size: 50px;
  width:80%;
`;
const SubTitle = styled.span`
  font-size: 23px;
  color: grey;
  margin-top:20px;
  font-style:italic;
  width:80%;
`;
const Desc = styled.span`
    width:80%;
    margin-top:20px;
`;
const SubHeading = styled.span`

`;
const Button = styled.button`
    width:150px;
    margin-top:15px;
    padding:10px 12px;
    border:none;
    background-color:darkblue;
    color:white;
    font-size:15px;
    cursor:pointer;
    border-radius:10px;
    `;

export default function Feature() {
  return (
    <div>
      <Container>
        <Left>
          <Phoneimg src={appimg}></Phoneimg>
        </Left>
        <Right>
          <Title>
            <b>Analyse</b> Past Legal data<br></br>
            <b>Predict</b> Future Crime
          </Title>
          <SubTitle>Learn and Grow</SubTitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            quisquam minima enim soluta ipsa non, ullam illo cumque itaque vel
            necessitatibus deserunt quidem alias est incidunt excepturi
            praesentium? Vitae, accusantium.
          </Desc>
          <Button>Learn More</Button>
        </Right>
      </Container>
    </div>
  );
}
