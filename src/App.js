import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Animatedshapes from "./components/Animatedshapes";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position:relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
`;

const Introshape = styled.div`
    ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
`
const ServicesShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 33% 0%, 55% 100%, 0% 100%);
  background-color: pink;
`
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;  
`


function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Intro />
        <Introshape></Introshape>
      </Container>
      <Container>
        <Feature></Feature>
        <FeatureShape></FeatureShape>
        <Animatedshapes></Animatedshapes>
      </Container>
      <Container>
        <Services></Services>
        <ServicesShape></ServicesShape>
      </Container>
      <Container>
        <Pricing></Pricing>
        <PriceShape></PriceShape>
      </Container>
      <Container>
        <Contact></Contact>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
