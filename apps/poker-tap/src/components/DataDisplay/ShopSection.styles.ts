import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const ItemSelector = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 10px;
`;

export const SelectorButton = styled.button<{ $active: "true" | "false" }>`
    border-radius: 8px;
    border: 2px solid ${Colors.brown.sandBeige};
    background-color: ${(props) => (props.$active === "true" ? Colors.brown.sandBeige : Colors.coral.peach)};
    font-weight: ${(props) => (props.$active === "true" ? "bold" : "normal")};
    cursor: pointer;
		font-size: 12px;
    transition: all 0.2s;
		aspect-ratio: 1/1;
    grid-column-end: span 1;

    &:hover {
        filter: brightness(1.1);
    }
`;

export const DescriptionItemCard = styled.div`

`;
