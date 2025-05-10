import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const StyledSection = styled.section<{
	$neutralStyle?: boolean;
	$lightStyle?: boolean;
}>`
    background-color: ${({ $neutralStyle, $lightStyle }) =>
			$neutralStyle
				? "transparent"
				: $lightStyle
					? Colors.neutral.slate
					: Colors.blue.indigo};
    border: ${({ $neutralStyle, $lightStyle }) =>
			$neutralStyle
				? "0"
				: $lightStyle
					? `3px solid ${Colors.blue.azure}`
					: `3px solid ${Colors.blue.navy}`};
    border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "6px")};
    > div {
        width: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 2px - 30px)")};
        height: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 30px - 2px - 5px)")};
        padding: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "15px")};
        background-color: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "transparent"
						: $lightStyle
							? Colors.neutral.mint
							: Colors.blue.cobalt};
        border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "4px")};
        border: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "0"
						: $lightStyle
							? `1px solid ${Colors.neutral.white}75`
							: `1px solid ${Colors.blue.indigo}75`};
    }
`;
