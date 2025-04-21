import styled, { css } from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const DeckContainer = styled.div`
		position: absolute;
		bottom: 50px;
		right: 50px;
    width: fit-content;
`;

export const DeckCardsStack = styled.div<{ $deckSize: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    min-width: 100px;
    aspect-ratio: 2 / 3;
    z-index: -1;

    > div {
        position: absolute;
        top: 2px;
        left: -2px;
        width: 120px;
        min-width: 100px;
        aspect-ratio: 2 / 3;
        border-radius: 8px;
        border: 3px solid ${colors.neutrals.mediumDark};
        box-shadow: 0 0 0 4px ${colors.neutrals.mediumDark};
    }

    ${({ $deckSize }) =>
			Array.from(
				{ length: Math.min($deckSize, 15) },
				(_, i) => css`
        > div:nth-child(${i + 1}) {
		        top: ${i + 1}px;
            left: ${-(i + 1)}px;
            z-index: ${Math.min($deckSize, 5) - i};

            border: 3px solid ${i % 2 === 0 ? colors.neutrals.white : colors.neutrals.white};
            box-shadow: 0 0 0 4px ${i % 2 === 0 ? colors.neutrals.veryPaleLight : colors.neutrals.white};
		        
		        background-color: ${colors.neutrals.white};
				    background-image:  linear-gradient(135deg, ${colors.reds.cherryRed} 25%, transparent 25%),
				                       linear-gradient(225deg, ${colors.reds.cherryRed} 25%, transparent 25%),
				                       linear-gradient(45deg, ${colors.reds.cherryRed} 25%, transparent 25%),
				                       linear-gradient(315deg, ${colors.reds.cherryRed} 25%, ${colors.neutrals.white} 25%);
				    background-position:  20px 0, 20px 0, 0 0, 0 0;
				    background-size: 20px 20px;
				    background-repeat: repeat;
        }
    `,
			)}

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
		box-shadow: 0 0 0 4px ${colors.neutrals.white};
		cursor: pointer;

    ${(props) =>
			props.$disabled &&
			css`
        cursor: not-allowed;
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }
    `}

`;

export const PriceTag = styled.div`
    background-color: ${colors.oranges.orangeYellow};
    color: ${colors.purples.darkPurple};
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
		opacity: 1;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 10px;
        background:
                linear-gradient(135deg, transparent 50%, ${colors.purples.darkPurple} 50%),
                linear-gradient(45deg, transparent 50%, ${colors.purples.darkPurple} 50%);
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
