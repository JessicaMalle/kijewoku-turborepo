import styled from "styled-components";

export const StyledHand = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20px;
    gap: 20px;
`;

export const StyledCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const StyledSorter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    
    > p {
        margin: 0;
    }
    
    > div {
        display: flex;
        justify-content: center;
        gap: 5px;
    }
`
