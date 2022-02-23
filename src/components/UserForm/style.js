import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 0;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
`

export const Button = styled.button`
    background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
    padding: 5px 10px;
    text-align: center;
    /* text-transform: uppercase; */
    transition: 0.5s;
    background-size: 200% auto;
    color: #fff;
    box-shadow: 0 0 20px #eee;
    border-radius: 3px;
    display: block;
    width: 100%;

    &:hover{
        background-position: right center; 
        color: #fff;
        text-decoration: none;
    }     
`

export const Error = styled.span`
    color: #ff0000;
    font-size: 14px;
`
