import styled from "styled-components";

export const Main = styled.main`
    margin: 0;
    padding: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    overflow: hidden;
`;

export const ScreenContainer = styled.div<{ isPortrait: boolean }>`
    aspect-ratio: ${({ isPortrait }) => (isPortrait ? '9 / 16' : '16 / 9')};
    background-color: #d3d3d3;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    height: 100%;
    max-width: ${({ isPortrait }) =>
  isPortrait ? 'calc(100dvh * (9 / 16))' : 'calc(100dvh * (16 / 9))'};
    max-height: ${({ isPortrait }) =>
  isPortrait ? 'calc(100dvw * (16 / 9))' : 'calc(100dvw * (9 / 16))'};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    &.fullscreen {
        width: 100vw;
        height: 100vh;
        max-width: none;
        max-height: none;
        aspect-ratio: 16 / 9;
    }
`;

export const Content = styled.div<{ isPortrait: boolean }>`
    aspect-ratio: 16 / 9;
    text-align: center;
    background-color: lightpink;
    transform: ${({ isPortrait }) => (isPortrait ? 'rotate(-90deg)' : 'none')};
    transform-origin: center;
`;

export const Button = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;

    &:hover {
        background-color: #555;
    }
`;
