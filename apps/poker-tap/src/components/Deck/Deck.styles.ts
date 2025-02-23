import styled from "styled-components";

export const StyledCardBack = styled.div`
    width: 100px;
    min-width: 100px;
    height: 150px;
    border: 1px solid #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #c40e0e;
    background-image: radial-gradient(circle, #fff 1px, #c40e0e 1px);
    background-size: 10px 10px;
    color: black;
    transform: scale(1);
    transition: transform 0.2s;
`;

export const Rest = styled.div`
    color: white;
    font-size: 2rem;
    background-color: black;
    padding: 10px;
`;
