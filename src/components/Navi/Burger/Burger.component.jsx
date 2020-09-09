import React, {useState} from 'react'
import styled from 'styled-components'
import {theme} from '../../../theme'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
       width: 2rem;
       height: 0.25rem;
       ${'' /* background-color: white; */}
       background-color: ${theme.primaryLight};
       border-radius: 5px;
       border-bottom: 1px solid darkgray;
    }
`

export default function Burger() {
    const [open, setOpen] = useState(false);

    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}
