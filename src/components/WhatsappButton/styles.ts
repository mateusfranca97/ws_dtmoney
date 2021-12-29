import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 99;
    bottom: 20px;
    right: 20px;

    color: #fff;

    width: 250px;
    height: 40px;

    background: var(--orange);

    border: none;
    border-radius: 30px;

    i{
        padding-left: 10px;
    }
    
    &:hover{
        filter: brightness(0.9);
    }
`
