import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ItemSlotContainer = styled.button`
    all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;
		background-color: ${colors.neutrals.veryPaleLight};
		color: ${colors.neutrals.dark};
		border: 3px solid ${colors.neutrals.paleLight};
		box-shadow: 0 0 0 2px ${colors.neutrals.medium};
		border-radius: 6px;

    &:hover, &:active {
				filter: brightness(0.9);
		}
		
		&:focus {
				filter: brightness(1.1);
		}
		
		&:disabled {
				filter: grayscale(100%);
		}
	`;

export const ItemSlotCount = styled.div`
		position: absolute;
		top: -10px;
		right: -10px;
		width: 26px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		font-weight: 700;
		font-size: 13px;
		border-radius: 50%;
		border: 2px solid ${colors.neutrals.paleLight};
    box-shadow: 0 0 0 2px ${colors.neutrals.medium};
		background-color: ${colors.neutrals.white};
		color: ${colors.neutrals.dark};
		z-index: 1;
`;
