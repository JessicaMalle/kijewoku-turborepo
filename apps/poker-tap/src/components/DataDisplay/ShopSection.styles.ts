import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ItemSelector = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 10px;
`;

export const SelectorButton = styled.button<{ active: boolean }>`
    border-radius: 8px;
    border: 2px solid ${colors.neutrals.paleLight};
    background-color: ${(props) => (props.active ? colors.neutrals.paleLight : colors.neutrals.veryPaleLight)};
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
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
