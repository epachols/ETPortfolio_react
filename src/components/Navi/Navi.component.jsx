import React from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger.component'

const Nav= styled.nav`
display: flex;
top: 0;
left: 0;
position: fixed;
justify-content: space-between;
width:100%;
height: 65px;
padding: 0 20px;

.logo {
    padding: 15px 0;
}
`

export default function Navi() {
    return (
        <Nav>
            <div className="logo">
                <h3>Welcome</h3>
            </div>
            <Burger />
            
        </Nav>
    )
}
