import React from "react";
import styled from "styled-components";
import Map from "../images/map.png";
import Phone from "../images/phone.png";
import Send from "../images/send.png";

const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const FormContainer = styled.div`
  width: 50%;
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
const Form = styled.div`
  height: 250px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftForm = styled.div`
  height: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextBox = styled.input`
  height: 60%;
  padding: 20px;
  width: 200px;
`;
const Button = styled.button`
    border-radius:10px;
    border:none;
    background-color:darkblue;
    color:white;
    font-weight::bold;
    padding:10px 15px;
    margin-top:40px;
    font-size:18px;
    cursor:pointer;
`;
const Title = styled.h1`
  margin: 50px;
  margin-top: 0px;
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:30px;
`;
const Icon = styled.img`
    width:20px;
`;
const Text = styled.span`
  font-size: 20px;
`;
export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions?<br></br>Let's get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name"></Input>
              <Input placeholder="Your email"></Input>
              <Input placeholder="Subject"></Input>
            </LeftForm>
            <RightForm>
              <TextBox placeholder="Your message"></TextBox>
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map}></Icon>
            <Text>2190 Gold Street,San Jose, CA 95002</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send}></Icon>
            <Text>contact@VirgenesRoad.com</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone}></Icon>
            <Text>1 818.436.1000, +1 408.519.9100</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
}
