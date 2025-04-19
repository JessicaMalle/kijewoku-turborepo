import styled, { css } from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const DeckContainer = styled.div`
    display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
`;

export const StyledCardBack = styled.div<{ $disabled: boolean }>`
    position: relative;
    width: 120px;
    min-width: 100px;
    aspect-ratio: 2 / 3;
    background-color: ${colors.neutrals.white};
    background-image:  linear-gradient(135deg, ${colors.reds.cherryRed} 25%, transparent 25%),
                       linear-gradient(225deg, ${colors.reds.cherryRed} 25%, transparent 25%),
    									 linear-gradient(45deg, ${colors.reds.cherryRed} 25%, transparent 25%),
    									 linear-gradient(315deg, ${colors.reds.cherryRed} 25%, ${colors.neutrals.white} 25%);
    background-position:  20px 0, 20px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
    border-radius: 8px;
		border: 3px solid ${colors.reds.red};
		box-shadow: 0 0 0 4px ${colors.neutrals.dark};
		cursor: pointer;

    ${(props) =>
			props.$disabled &&
			css`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 0, 0, 0.1) 10px,
                rgba(255, 0, 0, 0.1) 20px
            );
            pointer-events: none;
        }
    `}

`;

export const PriceTag = styled.div`
    background-color: ${colors.oranges.orangeYellow};
    color: ${colors.neutrals.dark};
    padding: 3px 24px;
    font-size: 1rem;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    position: absolute;
		top: 0;
		right: -20px;
		transform: rotate(24deg);		
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 10px;
        background:
                linear-gradient(135deg, transparent 50%, ${colors.neutrals.dark} 50%),
                linear-gradient(45deg, transparent 50%, ${colors.neutrals.dark} 50%);
        background-size: 10px 10px;
        background-repeat: repeat-y;
    }

    &::before {
        left: 0;
        transform: scaleX(-1);
    }

    &::after {
        right: 0;
    }
`;

export const Rest = styled.div`
    color: white;
    font-size: 2rem;
    background-color: black;
    padding: 10px;
		
		display: none;
`;

export const RevealDeckButton = styled.button`
    all: unset;
    position: absolute;
    top: 30px;
    left: 30px;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
		font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.3s ease, visibility 0.3s;
    z-index: 10;
`;
