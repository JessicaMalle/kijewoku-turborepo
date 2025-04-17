import styled, { keyframes } from "styled-components";
import { colors } from "./Colors.styles.ts";

// Animation clé pour déplacer le gradient
const meshGradientAnimation = keyframes`
    0% {
        background-position: 0 50%;
    }
    25% {
        background-position: 30% 70%;
    }
    50% {
        background-position: 100% 30%;
    }
    75% {
        background-position: 70% 90%;
    }
    100% {
        background-position: 0 50%;
    }
`;

export const MeshGradientWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    /* Création du gradient radial avec des zones floues */
    background: radial-gradient(circle at 20% 20%, ${colors.blues.turquoise}, transparent 40%),
    radial-gradient(circle at 80% 30%, ${colors.blues.darkBlue}, transparent 60%),
    radial-gradient(circle at 60% 70%, ${colors.blues.skyBlue}, transparent 70%),
    radial-gradient(circle at 30% 80%, ${colors.blues.teal}, transparent 50%),
    radial-gradient(circle at 70% 90%, ${colors.blues.cyan}, transparent 60%);
    background-size: 200% 200%;
    animation: ${meshGradientAnimation} 15s ease-in-out infinite;
		z-index: -1;
`;

export const Main = styled.main`
		position: relative;
		display: grid;
		grid-template-rows: 60px 1fr fit-content(100%);
		height: 100vh;
		max-height: 100vh;
		color: ${colors.neutrals.white};
`;

export const GameLayout = styled.div`
		display: grid;
		grid-template-columns: 350px minmax(auto, 1fr) 350px;
		grid-template-rows: 120px repeat(7, 1fr) 120px;
		gap: 15px;
		height: calc(100% - 15px);
		padding: 0 15px;
		overflow: hidden;

		#chips-counter {
				grid-column: 1/2;
				grid-row: 1/2;
		}

		#big-chip {
				grid-column: 1/2;
				grid-row: 1/10;
        position: relative;
				z-index: 2;
		}

		#poker-pads {
				align-items: center;
				align-self: center;
				position: relative;
        grid-column: 2/3;
        grid-row: 1/10;
        overflow-y: scroll;
				max-height: 80%;
		}

		#items {
				grid-column: 3/4;
				grid-row: 1/7;
        position: relative;
        z-index: 2;
		}

		#deck {
				grid-column: 3/4;
				grid-row: 7/10;
        position: relative;
        z-index: 2;
		}
`;

export const Header = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		padding: 0 15px;

		> h1 {
				margin: 0;
				font-size: 1.2rem;
		}
`;
