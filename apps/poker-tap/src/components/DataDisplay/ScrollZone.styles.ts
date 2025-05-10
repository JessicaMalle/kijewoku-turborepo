import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const ScrollContainer = styled.div<{
	$minHeight?: number | string | null;
	$maxHeight?: number | string;
	$fullHeight?: boolean;
}>`
    min-height: ${(props) =>
			props.$fullHeight
				? "calc(100% - 20px)"
				: typeof props.$minHeight === "number"
					? `${props.$minHeight}px`
					: props.$minHeight};

    max-height: ${(props) =>
			props.$fullHeight
				? "calc(100% - 20px)"
				: typeof props.$maxHeight === "number"
					? `${props.$maxHeight}px`
					: props.$maxHeight};
    height: ${(props) => (props.$fullHeight ? "100%" : "auto")};
    overflow-y: auto;
    width: calc(100% - 20px);
    padding: 10px;
    border-radius: 6px;
    background-color: ${Colors.dark.nightPurple}50;

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
