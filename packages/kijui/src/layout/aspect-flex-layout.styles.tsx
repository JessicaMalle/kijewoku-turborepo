import styled from "styled-components";
import bgPattern from '../assets/k-heart-white-pattern.png';

export const Main = styled.main`
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.neutralDark};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
`;

export const DarkBackground = styled.div`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgPattern});
    background-size: 5%;
    opacity: 0.05;
`;

export const ScreenContainer = styled.div<{ isPortrait: boolean }>`
    aspect-ratio: ${({ isPortrait }) => (isPortrait ? '9 / 16' : '16 / 9')};
    background-color: ${({ theme }) => theme.colors.background};
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
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    overflow: hidden;
    z-index: 1;
`;

export const Content = styled.div<{ isPortrait: boolean }>`
    position: relative;
    aspect-ratio: 16 / 9;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transform: ${({ isPortrait }) => (isPortrait ? 'rotate(-90deg)' : 'none')};
    transform-origin: center;
`;

export const Button = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.contrastText.secondary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryAccent};
    }
`;
