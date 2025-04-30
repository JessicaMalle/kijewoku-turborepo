import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledSection = styled.section<{
	$neutralStyle?: boolean;
	$lightStyle?: boolean;
}>`
    background-color: ${({ $neutralStyle, $lightStyle }) =>
			$neutralStyle
				? "transparent"
				: $lightStyle
					? colors.neutral400
					: colors.blue800};
    border: ${({ $neutralStyle, $lightStyle }) =>
			$neutralStyle
				? "0"
				: $lightStyle
					? `3px solid ${colors.blue300}`
					: `3px solid ${colors.blue1600}`};
    border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "6px")};
    > div {
        width: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 2px - 30px)")};
        height: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 30px - 2px - 5px)")};
        padding: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "15px")};
        background-color: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "transparent"
						: $lightStyle
							? colors.neutral300
							: colors.blue600};
        border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "4px")};
        border: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "0"
						: $lightStyle
							? `1px solid ${colors.neutral100}75`
							: `1px solid ${colors.blue800}75`};
    }
`;
