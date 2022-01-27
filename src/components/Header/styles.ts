import styled from 'styled-components';

export const Container = styled.header`
    max-height: 75px;
    padding: 1rem 0rem 1rem 6rem;
    
    img{
        height: 4rem;
    }

    .menu{
        padding: 0rem 5rem 0rem 0rem;
    }

    ul, a{
        color: #fff; 
        display:flex;
        align-items: center;
        justify-content: space-between;

        text-decoration: none;

        a:hover{
            transition: .2s;
            color: var(--orange)
        }
    }

    hr{
        margin-top: 1rem;
        width:100%; 
        color: #fff;
    }
`

export const Content = styled.div`
    /*  max-width: 1120px;
    // margin: 0 auto;

    // padding: 2rem 1rem 12rem;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;

    // button{ 
    //     font-size: 1rem;
    //     color: #FFF;
    //     background-color: var(--blue-light);
    //     border: 0;
    //     padding: 0 2rem;
    //     border-radius: 0.25rem;
    //     height: 3rem;

    //     transition: filter 0.2s;
            
    //     &:hover{
    //         filter: brightness(0.9);
    //     }
     } */
`