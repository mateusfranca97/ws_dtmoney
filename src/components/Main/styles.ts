import styled from 'styled-components';

export const Content = styled.main`

    .background{ 
        position: absolute;
        z-index: -99;
        bottom: 10px;
        right: 0px;
        left:-1px;
        filter: brightness(0.5);
    }

    .group{
        position: absolute; 
        height:18rem;
        z-index: 98;
        top:32rem;
    }

    .begin-page{
        height: 88vh; 
        background: {backgroundMain};
        display: flex;
        color: #000;

        .title{
            width:100%;
            padding: 10rem 0 0 6rem;

            h1{
                font-size: 4.5rem;
            }

            h1:nth-child(1){
                font-family:lato;
                color: #EEE;
                font-weight: 400;
            }

            h1:nth-child(2){
                margin-top:-10px;
                font-family:lato;
                font-weight: 600;
                color: var(--orange);
            }

        }

        .aside-media-social{
            padding-top: 13rem;
            width:5%;

            i:nth-child(1){
                margin-bottom: 10px;
            }

            i{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3rem;

            width: 44px;
            height: 44px;

            color: #FFF;

                &:hover{
                color: #fff;
                transition: 1s;
                background: var(--orange);
                cursor: pointer;
                }
            }
        }


    }

    .middle-page{
        height: 150vh;
        color: #FFF;    
        background: linear-gradient(10deg, rgba(32,32,32,0) 0%, rgba(32,32,32,1) 100%); 

        h1{
            display: flex;
            justify-content: center;

            padding-top: 2rem;
            font-size: 3rem;
        }

        .project-list{
            display: grid;
            justify-content: center;
            
            grid-template-columns: repeat(auto-fill, 300px);
            gap: 3rem;

            padding-top: 2rem;
            
        }
    }

    .footer-page{
        height: 45vh;
        background: blue;
    }

    @media (min-width: 707px){

    }
        
`