import styled from "styled-components";

export const StyledHand = styled.div`
    position: fixed;
    bottom: -80px;
		transform: translateX(-50%);
    left: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    max-width: calc(100% - (400px + 350px) - (15px * 2));
    padding: 30px 0;
    gap: -20px;
    margin: 0 auto;
    z-index: 2;
    transition: bottom 0.2s;

    &:hover {
        bottom: 0;
    }
`;

export const StyledCard = styled.div`
    position: relative;
    transform-origin: bottom center;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-40px) scale(1.1);
        z-index: 10;
    }
`;
