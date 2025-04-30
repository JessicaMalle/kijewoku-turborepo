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
		background-color: ${colors.neutral300};
		color: ${colors.neutral1600};
		border: 3px solid ${colors.neutral300};
		box-shadow: 0 0 0 2px ${colors.neutral800};
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
		border: 2px solid ${colors.neutral300};
    box-shadow: 0 0 0 2px ${colors.neutral800};
		background-color: ${colors.neutral100};
		color: ${colors.neutral1600};
		z-index: 1;
`;
