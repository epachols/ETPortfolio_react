import React from "react";
import CrowBg from "../images/codecrow.png";
import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    ${'' /* align-items: center; */}
    background-image: url(${CrowBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 90vh;
    margin-top: 10vh;
    width: 100vw;
    padding-top: 18vh;
    padding-left: 5vw;

    h4 {
        margin-left: 1rem;
        max-width: 60vw;
        flex-flow: wrap;
    }

`

export default function Home() {

  return (
    <StyledHome>
        <div>
        <h1>Hello!</h1>
        <h4>I'm Evan, a Full stack Web Developer</h4>

        </div>
    
    </StyledHome>
  );
}
