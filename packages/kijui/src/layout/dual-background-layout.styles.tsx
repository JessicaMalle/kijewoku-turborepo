import styled from "styled-components";
import bgPattern from "../assets/k-heart-white-pattern.png";

export const StyledDualBackgroundLayout = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Back = styled.div<{ topBackgroundColor?: string; topAccentColor?: string; topBackgroundImage?: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    #top-container {
        height: 100%;
        background: ${({ topBackgroundImage, topBackgroundColor, topAccentColor, theme }) =>
                topBackgroundImage
                        ? `url(${topBackgroundImage}) no-repeat center center / cover`
                        : `radial-gradient(${topBackgroundColor || theme.colors.secondary}, ${topAccentColor || theme.colors.secondaryAccent})`};

        #heart-white-pattern {
            height: 100%;
            background-image: ${({ topBackgroundImage }) => (topBackgroundImage ? 'none' : `url(${bgPattern})`)};
            background-size: 10%;
            animation: pan 180s linear infinite;
            opacity: 0.25;
        }

        #heart-white-pattern-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${({ topBackgroundImage, topAccentColor, theme }) =>
                    topBackgroundImage ? 'none' : `radial-gradient(transparent, ${topAccentColor || theme.colors.secondaryAccent})`};
        }
    }

    #bottom-container {
        position: absolute;
        z-index: 3;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0%);
        height: 25%;
        width: 100%;
        background-color: transparent;
        clip-path: polygon(
                0% 5%, 1.25% 0%, 2.5% 5%,
                3.75% 0%, 5% 5%, 6.25% 0%,
                7.5% 5%, 8.75% 0%, 10% 5%,
                11.25% 0%, 12.5% 5%, 13.75% 0%,
                15% 5%, 16.25% 0%, 17.5% 5%,
                18.75% 0%, 20% 5%, 21.25% 0%,
                22.5% 5%, 23.75% 0%, 25% 5%,
                26.25% 0%, 27.5% 5%, 28.75% 0%,
                30% 5%, 31.25% 0%, 32.5% 5%,
                33.75% 0%, 35% 5%, 36.25% 0%,
                37.5% 5%, 38.75% 0%, 40% 5%,
                41.25% 0%, 42.5% 5%, 43.75% 0%,
                45% 5%, 46.25% 0%, 47.5% 5%,
                48.75% 0%, 50% 5%, 51.25% 0%,
                52.5% 5%, 53.75% 0%, 55% 5%,
                56.25% 0%, 57.5% 5%, 58.75% 0%,
                60% 5%, 61.25% 0%, 62.5% 5%,
                63.75% 0%, 65% 5%, 66.25% 0%,
                67.5% 5%, 68.75% 0%, 70% 5%,
                71.25% 0%, 72.5% 5%, 73.75% 0%,
                75% 5%, 76.25% 0%, 77.5% 5%,
                78.75% 0%, 80% 5%, 81.25% 0%,
                82.5% 5%, 83.75% 0%, 85% 5%,
                86.25% 0%, 87.5% 5%, 88.75% 0%,
                90% 5%, 91.25% 0%, 92.5% 5%,
                93.75% 0%, 95% 5%, 96.25% 0%,
                97.5% 5%, 98.75% 0%, 100% 5%,
                100% 100%, 0% 100%
        );

        #stripe-pattern {
            height: 100%;
            width: 100%;
            background-size: 18px 18px;
            background-image: linear-gradient(
                    -45deg,
                    ${({ theme }) => theme.colors.neutralLight} 25%,
                    ${({ theme }) => theme.colors.background} 25%,
                    ${({ theme }) => theme.colors.background} 50%,
                    ${({ theme }) => theme.colors.neutralLight} 50%,
                    ${({ theme }) => theme.colors.neutralLight} 75%,
                    ${({ theme }) => theme.colors.background} 75%,
                    ${({ theme }) => theme.colors.background} 100%
            );
            animation: pan 360s linear infinite;
        }
    }

    @keyframes pan {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Top = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Bottom = styled.div`
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
