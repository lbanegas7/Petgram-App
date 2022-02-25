import styled from 'styled-components'

export const Button = styled.button`
    background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
    padding: 8px 10px;
    text-align: center;
    /* text-transform: uppercase; */
    transition: 0.5s;
    background-size: 200% auto;
    color: #fff;
    box-shadow: 0 0 20px #eee;
    border-radius: 3px;
    display: block;
    width: 90%;;
    margin-left: 10%;
    margin-top: 1rem;

    &:hover{
        background-position: right center; 
        color: #fff;
        text-decoration: none;
    }
    
`
