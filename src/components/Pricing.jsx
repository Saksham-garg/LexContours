import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
`

export default function Pricing() {
  return (
    <Container>
        <PriceCard price="10" plan="Basic"></PriceCard>
        <PriceCard price="20" plan="Premium"></PriceCard>
        <PriceCard price="30" plan="Advanced"></PriceCard>
    </Container>
  )
}
