import React from "react";
import CrowBg from "../images/codecrow.png";

export default function Home() {
  const styles = {
    display: `flex`,
    justifyContent: `space-around`,
    alignItems: `center`,
    backgroundImage: `url(${CrowBg})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    height: `90vh`,
    marginTop: `10vh`,
    width: `98vw`,
  };
  return (
    <div style={styles}>
      <div>
        <h1>Welcome,</h1>
        <h4>I'm Evan, a Full stack Web Developer</h4>
      </div>
    </div>
  );
}
