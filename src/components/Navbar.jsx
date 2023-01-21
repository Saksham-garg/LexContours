import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
    display:flex;
    list-style:none;   
`;

const Menulist = styled.li`
    margin-right:30px;
    font-size:20px;
    color:grey;
    font-weight:bold;
`;
const Button = styled.button`
    padding:10px 15px;
    color:white;
    background-color:crimson;
    font-weight:bold;
    border:2px solid white;
    cursor:pointer;
    border-radius:8px;
`;
export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>LexCountors</Logo>
          <Menu>
            <Menulist>Home</Menulist>
            <Menulist>Features</Menulist>
            <Menulist>Services</Menulist>
            <Menulist>Pricing</Menulist>
            <Menulist>Contact Us</Menulist>
          </Menu>
        </Left>
        <Button>Join Now</Button>
      </Wrapper>
    </Container>
  );
}
