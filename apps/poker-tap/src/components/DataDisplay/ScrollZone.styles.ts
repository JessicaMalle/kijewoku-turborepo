import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ScrollContainer = styled.div<{
	$minHeight: number | string | null;
	$maxHeight: number | string;
}>`
    min-height: ${(props) =>
			typeof props.$minHeight === "number"
				? `${props.$minHeight}px`
				: props.$minHeight};

    max-height: ${(props) =>
			typeof props.$maxHeight === "number"
				? `${props.$maxHeight}px`
				: props.$maxHeight};
    overflow-y: auto;
    width: calc(100% - 12px);
		padding: 10px;
		border-radius: 6px;
		background-color: ${colors.neutrals.dark}50;

    /* Stylisation de la scrollbar */
    /* Pour Chrome, Edge, et Safari */
    &::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* Pour Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`;
