import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const ItemSelector = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
`;

export const SelectorButton = styled.button<{ active: boolean }>`
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px solid ${colors.neutrals.paleLight};
    background-color: ${props => props.active ? colors.neutrals.paleLight : colors.neutrals.veryPaleLight};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        filter: brightness(1.1);
    }
`;

export const ActiveItemDisplay = styled.div`
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
    padding: 15px;
    border-radius: 8px;
    border: 2px solid ${colors.neutrals.paleLight};
    background-color: ${colors.neutrals.veryPaleLight};
`;
