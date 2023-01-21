import React, { useState } from "react";
import styled from "styled-components";
import Law from "../images/Law.png";
import MiniCard from "./MiniCard";
import Play from '../images/play.png'
import vd from '../images/output.mp4'

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
    position:relative;
`;
const Right = styled.div`
  width: 50%;
`;

const Image = styled.img`
  display:${(props)=>props.video && "none"};
  width: 80%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const Desc = styled.span`
  font-size: 20px;
  color: gray;
  margin-top:20px;
`;  
const CardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 50px;
  margin-top:50px;
`;
const Button = styled.button`
    border-radius:10px;
    border:none;
    background-color:darkblue;
    color:white;
    font-weight::bold;
    padding:10px 15px;
    margin-top:40px;
    width:140px;
    font-size:18px;
    cursor:pointer;
    display:flex;
    align-items:center;
`;

const Icon = styled.img`
    width:20px;
    margin-right:10px;
`
const Video = styled.video`
    display:${(props)=>!props.video && "none"};
    height:300px;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    right:0;
`
export default function Services() {
    const [video,setvideo] = useState(false);

  return (
    <div>
      <Container>
        <Left>
          <Image video={video} src={Law}></Image>
          <Video video={video} autoplay loop controls src={vd}></Video>
        </Left>
        <Right>
          <Wrapper>
            <Title>Learn and Grow</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem
              ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
              dolor sit amet consectetur adipisicing elit consectetur adipisicing 
              elit Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Desc>
            <CardContainer>
              <MiniCard></MiniCard>
              <MiniCard></MiniCard>
              <MiniCard></MiniCard>
            </CardContainer>
            <Button  onClick={()=>setvideo(true)}><Icon src={Play}></Icon> Click Me</Button>
          </Wrapper>
        </Right>
      </Container>
    </div>
  );
}
