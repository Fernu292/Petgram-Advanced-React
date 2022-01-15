import styled from "styled-components";

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
`;