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
					? colors.neutrals.pale
					: colors.blues.navyBlue};
    border: ${({ $neutralStyle, $lightStyle }) =>
			$neutralStyle
				? "0"
				: $lightStyle
					? `3px solid ${colors.neutrals.paleLight}`
					: `3px solid ${colors.neutrals.dark}`};
    border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "6px")};
    > div {
        width: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 2px - 30px)")};
        height: ${({ $neutralStyle }) => ($neutralStyle ? "auto" : "calc(100% - 30px - 2px - 5px)")};
        padding: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "15px")};
        background-color: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "transparent"
						: $lightStyle
							? colors.neutrals.veryPaleLight
							: colors.blues.darkBlue};
        border-radius: ${({ $neutralStyle }) => ($neutralStyle ? "0" : "4px")};
        border: ${({ $neutralStyle, $lightStyle }) =>
					$neutralStyle
						? "0"
						: $lightStyle
							? `1px solid ${colors.neutrals.white}75`
							: `1px solid ${colors.blues.skyBlue}75`};
    }
`;
