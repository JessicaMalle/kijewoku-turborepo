import styled from "styled-components";

export const StyledPokerChip = styled.div`
    position: relative;
    width: 151px;
    height: 151px;
    border-radius: 100%;
    background-size: 151px 151px;
    background-position: center center;
    cursor: pointer;
    transition: 200ms;
    
    &:active {
        transform: scale(90%);
    }
    
    &:before {
        position: absolute;
        content: "";
        width: 117px;
        height: 117px;
        border-radius: 100%;
        top: 9px;
        left: 9px;
        background-size: 151px 151px;
        background-position: center center;
    }
    
    &:after {
        position: absolute;
        font: bold 50px/111px sans-serif;
        width: 111px;
        height: 111px;
        border-radius: 100%;
        top: 20px;
        left: 20px;
    }

    background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #dddddd 0, #dddddd 97.4304px, #fff 97.4304px, #fff 113.4304px, #dddddd 113.4304px, #dddddd 151px);
    
    &:before {
        border: 8px solid #dddddd;
        background-image: linear-gradient(0deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(120deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(150deg, #C1C1C1 0, #C1C1C1 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #C1C1C1 110.7104px, #C1C1C1 151px);
    }
    
    &:after {
        content: "1";
        background: #dddddd;
        color: #C1C1C1;
    }
`;
