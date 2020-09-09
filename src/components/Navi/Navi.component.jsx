import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav/RightNav.component'
import Burger from './Burger/Burger.component'

const Nav= styled.nav`
display: flex;
top: 0;
left: 0;
position: fixed;
justify-content: space-between;
width:100%;
height: 65px;
border-bottom: 2px solid lightgray;
padding: 0 20px;

.logo {
    padding: 15px 0;
}
`

export default function Navi() {
    return (
        <Nav>
            <div className="logo">
                EvBar, FooBar
            </div>
            <Burger />
            <RightNav />
        </Nav>
    )
}
