import styled from "styled-components";

export const CartridgeStyle = styled.div<{ size: number }>`
    width: ${({ size }) => size}px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => `${theme.colors.neutralDark}25`};
`;
