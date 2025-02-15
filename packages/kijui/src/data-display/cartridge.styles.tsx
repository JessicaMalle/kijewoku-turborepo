import styled from "styled-components";

export const CartridgeStyle = styled.div<{ size: number }>`
    width: ${({ size }) => size}px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => `${theme.colors.neutralDark}25`};
`;

export const IllustrationStyle = styled.div<{ illustration: string }>`
    background-image: url(${({ illustration }) => illustration});
    background-size: cover;
    cursor: pointer;
`;

export const ButtonStyle = styled.button<{ size: number }>`
    all: unset;
    width: ${({ size }) => size}px;
    aspect-ratio: 1/1;
    cursor: pointer;
    display: block;
    flex: 1;
`;

export const DetailsStyle = styled.div<{ isOpen: boolean }>`
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
`;

export const CreditsStyle = styled.div`
    h2 {
        margin-top: 0;
    }
`;

export const CreditItemStyle = styled.li`
    list-style: none;
`;
