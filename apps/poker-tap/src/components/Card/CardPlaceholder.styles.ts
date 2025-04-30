import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledCardPlaceholder = styled.div<{ $noHover?: boolean }>`
    container-name: card-placeholder;
    container-type: inline-size;
    position: relative;
    width: clamp(60px, 12vw, 100px);
    min-width: 60px;
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px dashed ${colors.green800};
    background-color: ${colors.green600}50;

    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ $noHover }) =>
					$noHover ? `${colors.green600}50` : `${colors.green1400}50`};
    }

    user-select: none;
    overflow: hidden;
    cursor: default;`;
