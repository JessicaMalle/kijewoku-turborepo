import styled from "styled-components";

export const StyledHand = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
	padding: 15px 0;
    backdrop-filter: blur(2px);
    border-radius: 12px;

    @media (max-width: 480px) {
        width: calc(100% - 10px - 4px);
        padding: 5px;
    }

`;

export const StyledCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const StyledSorter = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
`
