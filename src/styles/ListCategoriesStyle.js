import styled, {css, keyframes} from "styled-components";

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`


export const List = styled.ul`
    display: flex;
    padding-left: 0;
    overflow: scroll;
    width: 100%;

    /* Ocultar scoll pero mantener utilidad*/
    &::-webkit-scrollbar{
        display: none;
    }

    li{
        padding: 0px 8px;
    }
    ${props => props.fixed && css `
        animation: ${bounceDownKeyFrames} 1s ease;
        background-color: white;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 80%;
        height: 10rem;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -15px;
        transform:  scale(.5);
        z-index: 1;
        justify-content: space-around;
        align-items: center;
    `}
`;