import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const ItemSlotContainer = styled.button`
    all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;
		color: ${Colors.dark.nightPurple};
    border: 3px solid ${Colors.blue.skyBlue};
    box-shadow: 0 0 0 3px ${Colors.blue.indigo};
    background-color: ${Colors.blue.azure};
		
		border-radius: 6px;
		
		transition: 0.2s;

    &:hover, &:active {
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
		border: 2px solid ${Colors.neutral.mint};
    box-shadow: 0 0 0 2px ${Colors.neutral.slate};
		background-color: ${Colors.neutral.white};
		color: ${Colors.dark.nightPurple};
		z-index: 1;
`;
