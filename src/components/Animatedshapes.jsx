import React from 'react'
import styled from 'styled-components'

 const Square = styled.div`
    height:60px;
    width:60px;
    top:-60px;
    left:-60px;
    position:absolute;
    background-color:blue;
    z-index:-1;
    opacity:0.7;
    animation: square 25s linear alternate infinite;

    @keyframes square{
        to{
            transform:translate(100vw,100vh);
        }
    }
 `

 const Circle = styled.div`
 height:100px;
 width:100px;
 top:200px;
 left:-100px;
 border-radius:50%;
 position:absolute;
 background-color:#ff97af;
 z-index:-1;
 opacity:0.7;
 animation: circle 25s linear alternate infinite;

 @keyframes circle{
     to{
         transform:translate(100vw,-100vh);
     }
 }
`
 const Rectangle = styled.div`
 height:50px;
 width:100px;
 top:400px;
 left:-50px;
 position:absolute;
 background-color:#669966;
 z-index:-1;
 opacity:0.5;
 animation: rectangle 25s linear alternate infinite;

 @keyframes rectangle{
     to{
         transform:translate(100vw,-50vh);
     }
 }
`

export default function Animatedshapes(){
  return (
    <div>
            <Square></Square>
            <Circle></Circle>
            <Rectangle></Rectangle>
    </div>
    
  )
}
