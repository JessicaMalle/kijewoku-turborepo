import styled, { css } from "styled-components";
import { Colors } from "../../Colors.styles.ts";
import type { CardColor } from "../../types/gameTypes.ts";

const getTextColor = (color: CardColor): string => {
	switch (color) {
		case "spades":
			return Colors.dark.mediumPurple;
		case "hearts":
			return Colors.red.crimson;
		case "clover":
			return Colors.green.jade;
		case "diamonds":
			return Colors.blue.azure;
	}
};

const getBackgroundGradient = (color: CardColor): string => {
	switch (color) {
		case "spades":
			return `linear-gradient(to bottom, ${Colors.dark.mediumPurple}, ${Colors.dark.nightPurple})`;
		case "hearts":
			return `linear-gradient(to bottom, ${Colors.red.crimson}, ${Colors.red.burgundy})`;
		case "clover":
			return `linear-gradient(to bottom, ${Colors.green.jade}, ${Colors.green.forest})`;
		case "diamonds":
			return `linear-gradient(to bottom, ${Colors.blue.azure}, ${Colors.blue.navy})`;
	}
};

export const StyledCard = styled.div<{
	color: CardColor;
	$active?: string;
	$isDraggable?: boolean;
	$isDragging?: boolean;
}>`
    container-name: card;
    container-type: inline-size;
    position: relative;
    width: clamp(60px, 12vw, 100px);
    min-width: 60px;
    border: 2px solid ${Colors.neutral.mint};
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${Colors.neutral.white};
    color: ${(props) => getTextColor(props.color)};
    transition: ${(props) => (props.$isDragging ? "0ms" : "200ms")};
    font-family: "Bebas Neue", sans-serif;

    user-select: none;
    overflow: hidden;
    cursor: ${(props) => {
			if (props.$isDragging) return "grabbing";
			if (props.$isDraggable) return "grab";
			return "default";
		}};

		border: ${(props) => (props.$active ? `2px solid ${Colors.red.crimson}` : "0 solid transparent")};
    box-shadow: ${(props) => (props.$active ? `0 0 0 2px ${Colors.pink.salmon}` : "none")};
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
        linear-gradient(to bottom, ${Colors.neutral.white}, ${Colors.neutral.white}) padding-box,
        linear-gradient(
                to top,
                ${Colors.neutral.mint} 0%,
                ${Colors.neutral.white} 75%,
                ${Colors.neutral.white} 100%
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

    color: ${({ color }) => getTextColor(color)};
    background: ${({ color }) => getBackgroundGradient(color)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${({ value }) =>
			Number(value) === 10 &&
			`
      transform: translateX(-2px);
    `}
`;
