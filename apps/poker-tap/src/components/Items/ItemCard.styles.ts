import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledItemCard = styled.div`
    padding: 10px;
    border-radius: 8px;
    border: 2px solid ${colors.neutral300};
    background-color: ${colors.neutral300};
		color: ${colors.neutral1000};
    aspect-ratio: 1 / 1;
`;

export const TitleItemCard = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		font-size: 1.4rem;
		font-weight: 700;
		border-radius: 8px;
		background-color: ${colors.neutral300};
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
    		background-color: ${colors.neutral100};
		}
`;
