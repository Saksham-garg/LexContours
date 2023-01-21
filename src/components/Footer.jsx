import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height:10%;    
    background-color:#111;
    color:lightgray;
    `
const Wrapper = styled.div`
    padding:20px;
    display:flex;
    justify-content:space-between;
`
const List = styled.ul`
    display:flex;
    padding:0px;
    margin:0px;
    list-style:none;
`
const ListItem = styled.li`
    margin-right:20px;   
    font-color:white; 
`
const Copyright = styled.div``

export default function Footer() {
  return (
    <div>
        <Container>
            <Wrapper>   
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>@Dolu Coder ©</Copyright>
            </Wrapper>
        </Container>
    </div>
  )
}
