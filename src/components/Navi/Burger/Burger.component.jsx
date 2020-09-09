import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import RightNav from "../RightNav/RightNav.component";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 99;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 5px;
    ${"" /* border-bottom: 1px solid darkgray; */}
    transform-origin: 1px;
    transition: all 0.5s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0deg)`)};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? `translateX(-100%)` : `translateX(0)`};
      opacity: ${({ open }) => (open ? `0` : `1`)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0deg)`)};
    }
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
}
