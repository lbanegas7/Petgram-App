import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left:0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right:0;
    width: auto;
    z-index: 999;

`

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: auto;
    display: inline-flex;
`
