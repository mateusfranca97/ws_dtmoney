import styled from 'styled-components';

export const Content = styled.main`

    img{ 
        position: absolute;
        z-index: -99;
        bottom: 0px;
        right: 0px;
        filter: blur(5px);
    }

    .begin-page{
        height: 88.2vh; 
        background: {backgroundMain};
        display: flex;
        color: #000;
    }

    .middle-page{
        height: 100vh;
        background: red;
    }

    .footer-page{
        height: 40vh;
        background: blue;
    }

    .title{
        width:100%;
        padding: 10rem 0 0 3rem;

        h1{
            font-size: 3.5rem;
        }

        h1:nth-child(1){
            color: var(--text-title)
        }

        h1:nth-child(2){
            color: var(--orange);
        }

    }
    
    .aside-media-social{
        padding-top: 13rem;
        width:5%;

        i:nth-child(1){
            margin-bottom: 10px;
        }
    }

    i{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 33px;
        height: 33px;

        color: #FFF;

        &:hover{
        color: #fff;
        transition: .2s;
        border-radius: 4px;
        background: var(--orange);
        cursor: pointer;
        }
    }

    
`