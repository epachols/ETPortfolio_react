import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../theme"
const Ul = styled.ul`
    list-style: none;
    display:flex;
    flex-flow: row nowrap;
    text-align: center;
li {
    padding: 18px 10px;
    color: #0B64A4
}

@media (max-width: 2000px) {
    text-Align: left;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width:50vw;
    padding-top: 4rem;
    background-color: ${theme.primaryLight};
    ${'' /* bottom: 0; */}
}`


export default function RightNav() {
    return (
            <Ul>
                <li>about</li>
                <li>portfolio</li>
                <li>Contact</li>
                <li>home</li>
            </Ul>
    )
}
