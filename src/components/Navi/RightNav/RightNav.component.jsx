import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  li {
    padding: 1rem 10px;
    color: #0b64a4;
    font-size: 2rem;
  }

  @media (max-width: 2000px) {
    text-align: left;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};
    top: 0;
    right: 0;
    height: 100vh;
    width: 25vw;
    padding-top: 4rem;
    background-color: ${theme.primaryLight};
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 800px) {
      width:70vw;
  }
`;

export default function RightNav({ open, setOpen }) {
  return (
    <Ul open={open} setOpen={setOpen}>
      <li>
        <Link to="/" onClick={() => setOpen(!open)}>
          <span style={{color:`#0b64a4`}}>about</span>
        </Link>
      </li>
      <li><span style={{color:`#0b64a4`}}>portfolio</span></li>
      <li><span style={{color:`#0b64a4`}}>contact</span></li>

    </Ul>
  );
}
