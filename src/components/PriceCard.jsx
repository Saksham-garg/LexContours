import React from "react";
import styled from "styled-components";
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    margin-right:50px;
    border-radius:10px;
  -webkit-box-shadow: 0px 0px 27px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 27px -11px rgba(0, 0, 0, 0.58);
`;
const Pricetag = styled.div`
    display:flex;
    align-items:center;
    margin-top:35px;
    margin-bottom:25px;
`;
const Price = styled.span`
    font-weight:bold;
    font-size:50px;
`;
const Button = styled.button`
    border-radius:10px;
    border:none;
    background-color:darkblue;
    color:white;
    font-weight::bold;
    padding:10px 15px;
    margin-top:40px;
    width:110px;
    font-size:18px;
    cursor:pointer;
`;
const PricePlan = styled.button`
    border-radius:20px;
    border:1px solid crimson;
    background-color:transparent;
    color:crimson;
    font-weight::bold;
    padding:7px 7px;
    margin-top:20px;
    width:100px;
    font-size:14px;
`;
const Offer = styled.ul`  
    padding:0px 0px 0px 20px;
list-style:none;    
`;
const OfferList = styled.li`
    margin:30px 10px;
    font-size:16px;
`;
export default function PriceCard({price,plan}) {
  return (
    <Container>
      <Pricetag>
        $<Price>{price}</Price>/month
      </Pricetag>
      <PricePlan>{plan}</PricePlan>
      <Offer>
        <OfferList>Access to 100 blogs</OfferList>
        <OfferList>Exclusive Support</OfferList>
        <OfferList>50+ Free Templates</OfferList>
        <OfferList>Premium plugins</OfferList>
      </Offer>
      <Button>Join now</Button>
    </Container>
  );
}
