import styled, { css } from "styled-components";
import { Colors } from "../../Colors.styles.ts";

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
        border: 3px solid ${Colors.dark.mediumPurple};
        box-shadow: 0 0 0 4px ${Colors.dark.mediumPurple};
    }

    ${({ $deckSize }) =>
			Array.from(
				{ length: Math.min($deckSize, 15) },
				(_, i) => css`
        > div:nth-child(${i + 1}) {
		        top: ${i + 1}px;
            left: ${-(i + 1)}px;
            z-index: ${Math.min($deckSize, 5) - i};

            border: 3px solid ${i % 2 === 0 ? Colors.neutral.white : Colors.neutral.white};
            box-shadow: 0 0 0 4px ${i % 2 === 0 ? Colors.neutral.mint : Colors.neutral.white};

		        background-color: ${Colors.neutral.white};
				    background-image:  linear-gradient(135deg, ${Colors.red.crimson} 25%, transparent 25%),
				                       linear-gradient(225deg, ${Colors.red.crimson} 25%, transparent 25%),
				                       linear-gradient(45deg, ${Colors.red.crimson} 25%, transparent 25%),
				                       linear-gradient(315deg, ${Colors.red.crimson} 25%, ${Colors.neutral.white} 25%);
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
    background-color: ${Colors.neutral.white};
    background-image:  linear-gradient(135deg, ${Colors.red.crimson} 25%, transparent 25%),
                       linear-gradient(225deg, ${Colors.red.crimson} 25%, transparent 25%),
    									 linear-gradient(45deg, ${Colors.red.crimson} 25%, transparent 25%),
    									 linear-gradient(315deg, ${Colors.red.crimson} 25%, ${Colors.neutral.white} 25%);
    background-position:  20px 0, 20px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
    border-radius: 8px;
		border: 3px solid ${Colors.red.ruby};
		box-shadow: 0 0 0 4px ${Colors.neutral.white};
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

