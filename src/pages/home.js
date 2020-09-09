import React from "react";
import CrowBg from "../images/codecrow.png";
import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${CrowBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 90vh;
    margin-top: 10vh;
    width: 98vw;

`

export default function Home() {
  const styles = {
    display: `flex`,
    justifyContent: `space-around`,
    alignItems: `center`,
    backgroundImage: `url(${CrowBg})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `left`,
    height: `90vh`,
    marginTop: `10vh`,
    width: `98vw`,
  };
  return (
    <StyledHome>
      <div>
        <h1>Hello!</h1>
        <h4>I'm Evan, a Full stack Web Developer</h4>
      </div>
    </StyledHome>
  );
}
