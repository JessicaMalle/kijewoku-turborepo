import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const StyledItemCard = styled.div`
    padding: 10px;
    border-radius: 8px;
    border: 2px solid ${Colors.neutral.mint};
    background-color: ${Colors.neutral.mint};
		color: ${Colors.dark.mediumPurple};
    aspect-ratio: 1 / 1;
`;

export const TitleItemCard = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		font-size: 1.4rem;
		font-weight: 700;
		border-radius: 8px;
		background-color: ${Colors.neutral.mint};
`;

export const IllustrationItemCard = styled.div`
		position: relative;
		aspect-ratio: 3/2;
		margin: 15px 0;
		&:after {
				content: '';
        position: absolute;
				height: 100%;
				aspect-ratio: 1/1;
				border-radius: 50%;
				left: 50%;
				transform: translateX(-50%);
    		background-color: ${Colors.neutral.white};
		}
`;
