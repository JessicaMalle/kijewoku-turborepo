import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ButtonContainer = styled.div`
    height: 51px;
    max-width: fit-content;
    position: relative;
    display: inline-block;
`;

export const StyledButton = styled.button<{
	$fontSize?: string | number;
	$hasTextShadow?: boolean;
}>`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    border: 3px solid ${colors.neutral1600};
    border-radius: 6px;
    background-color: ${colors.yellow400};
    max-width: fit-content;
    height: 45px;
    font-size: ${({ $fontSize }) => (typeof $fontSize === "number" ? `${$fontSize}px` : $fontSize || "1rem")};

    > span {
        display: block;
        height: 40px;
        line-height: 40px;
        padding: 0 30px;
        background-color: ${colors.yellow100};
        border-radius: 3px;
        color: ${colors.neutral1600};
        ${({ $hasTextShadow = true }) =>
					$hasTextShadow
						? `
          text-shadow:
                  -1px -1px 0 ${colors.neutral100},
                  1px -1px 0 ${colors.neutral100},
                  -1px 1px 0 ${colors.neutral100},
                  1px 1px 0 ${colors.neutral100};
          `
						: ""}
        font-weight: 700;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        filter: grayscale(1);
    }
`;
