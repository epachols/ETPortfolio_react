import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../theme"
import {Link} from 'react-router-dom'

const Ul = styled.ul`
    list-style: none;
    display:flex;
    flex-flow: row nowrap;
    text-align: center;
li {
    padding: 18px 10px;
    color: #0B64A4;
    font-size: 2rem;
}

@media (max-width: 2000px) {
    text-Align: left;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open? `translateX(0)`: `translateX(100%)`};
    top: 0;
    right: 0;
    height: 100vh;
    width:50vw;
    padding-top: 4rem;
    background-color: ${theme.primaryLight};
    transition: transform 0.3s ease-in-out;
    ${'' /* bottom: 0; */}
}`


export default function RightNav({ open, setOpen }) {
    return (
            <Ul open={open} setOpen={setOpen}>
                <li><Link to="/about" onClick={()=> setOpen(!open)}>about</Link></li>
                <li>portfolio</li>
                <li>Contact</li>
                <li><Link to="/" onClick={()=> setOpen(!open)}>home</Link></li>
            </Ul>
    )
}
