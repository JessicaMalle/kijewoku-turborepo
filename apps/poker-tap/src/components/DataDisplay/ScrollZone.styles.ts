import styled from "styled-components";

export const ScrollContainer = styled.div<{ $maxHeight: number | string }>`
    max-height: ${(props) =>
			typeof props.$maxHeight === "number"
				? `${props.$maxHeight}px`
				: props.$maxHeight};
    overflow-y: auto;
    width: 100%;

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
