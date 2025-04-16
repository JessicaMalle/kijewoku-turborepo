import styled, { css } from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledCard = styled.div<{
	color: string;
	active?: string;
	$isDraggable?: boolean;
	$isDragging?: boolean;
}>`
    container-name: card;
    container-type: inline-size;
    position: relative;
    width: clamp(60px, 12vw, 100px);
    min-width: 60px;
    border: 2px solid ${colors.neutrals.veryPaleLight};
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: ${colors.neutrals.white};
    color: ${(props) => (props.color === "hearts" || props.color === "diamonds" ? colors.reds.cherryRed : colors.neutrals.paleDark)};
    transform: ${(props) => (props.active ? "translateY(-10px)" : "translateY(0)")};
    transition: ${(props) => (props.$isDragging ? "0ms" : "200ms")};
    font-family: "Bebas Neue", sans-serif;
    
    user-select: none;
    overflow: hidden;
    cursor: ${(props) => (props.$isDragging ? "grab" : "default")};

    @media (hover: hover) and (pointer: fine) {
        &:hover > div:last-child {
            filter: ${(props) => (props.$isDragging ? "contrast(1.4)" : "brightness(1)")};
        }
    }
`;

export const SuitAndValueWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100%);
    margin: 5px;
    border: 2px solid transparent;
    border-radius: 6px;
    background:
        linear-gradient(to bottom, ${colors.neutrals.white}, ${colors.neutrals.white}) padding-box,
        linear-gradient(
                to top,
                ${colors.neutrals.veryPaleLight} 0%,
                ${colors.neutrals.white} 75%,
                ${colors.neutrals.white} 100%
        ) border-box;
    background-clip: content-box, border-box;
`;

export const CardValue = styled.div`
    position: absolute;
    top: -10px;
    left: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
`;

export const CardSuit = styled.div`
    position: absolute;
    top: -10px;
    right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
    font-size: 20px;
`;

interface BigCardValueProps {
	value: string;
	color: "hearts" | "diamonds" | "spades" | "clover";
}

const generateFontSizeContainers = (sizes: number[]) => {
	return sizes.map(
		(size) => css`
      @container card (max-width: ${size}px) {
        font-size: ${size - 10}px;
      }
    `,
	);
};

const fontSizeSteps = Array.from({ length: 31 }, (_, i) => 90 - i);

export const BigCardValue = styled.div<BigCardValueProps>`
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    
    font-size: 90px;
    ${generateFontSizeContainers(fontSizeSteps)}

    color: ${({ color }) => (color === "hearts" || color === "diamonds" ? colors.reds.cherryRed : colors.neutrals.pale)};
    background: ${({ color }) =>
			(color === "hearts" || color === "diamonds")
				? `linear-gradient(to bottom, ${colors.reds.cherryRed}, ${colors.reds.crimson})`
				: `linear-gradient(to bottom, ${colors.neutrals.medium}, ${colors.neutrals.mediumDark})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${({ value }) =>
			Number(value) === 10 &&
			`
      transform: translateX(-2px);
    `}
`;
