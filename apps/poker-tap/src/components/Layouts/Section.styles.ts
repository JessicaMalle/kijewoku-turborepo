import styled from "styled-components";

export const StyledSectionOLD = styled.section<{ neutralStyle?: boolean }>`
		padding: ${({ neutralStyle }) => (neutralStyle ? "0" : "15px")};
		border: ${({ neutralStyle }) => (neutralStyle ? "none" : "2px solid #213547")};
		background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#21354750")};
		border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "12px")};
`;

export const StyledSection = styled.section<{ neutralStyle?: boolean }>`
    background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#3859b3")};
    border: ${({ neutralStyle }) => (neutralStyle ? "0" : "3px solid #3e3b65")};
    border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "6px")};
		
		> div {
				width: calc(100% - 30px);
        height: ${({ neutralStyle }) => (neutralStyle ? "auto" : "calc(100% - 30px - 5px)")};
        padding: ${({ neutralStyle }) => (neutralStyle ? "0" : "15px")};
        background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#3388de")};
        border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "4px")};
    }
`;
