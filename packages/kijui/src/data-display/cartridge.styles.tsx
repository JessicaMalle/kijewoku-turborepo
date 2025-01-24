import styled from "styled-components";

export const CartridgeStyle = styled.div`
    width: 320px;
    height: 320px;
    border: 3px solid ${({theme}) => theme.colors.neutralDark};
    border-radius: 6px;
    background-color: ${({theme}) => `${theme.colors.neutralDark}25`};
`;
