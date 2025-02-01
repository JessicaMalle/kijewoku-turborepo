import styled from "styled-components";

export const StyledHeader = styled.header<{ gr3: number }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({ gr3 }) => gr3}px;
    padding: 0 ${({gr3}) => gr3}px;
    background-color: #f0f0f0;
    z-index: 999;
    
    @media screen and (max-width: 980px) {
        font-size: xx-small;
    }
`;

export const StyledContent = styled.section`
    padding: min(5vh, 5vw);
`;

export const StyledFooter = styled.footer`
    padding: min(5vh, 5vw);
`;

export const StyledAside = styled.aside<{ width: number }>`
    width: ${({ width }) => width}px;
    background-color: #1e1e1e;
    z-index: 1000;
`;
