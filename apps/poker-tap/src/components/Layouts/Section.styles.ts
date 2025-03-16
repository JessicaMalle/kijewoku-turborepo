import styled from "styled-components";

export const StyledSection = styled.section<{ neutralStyle?: boolean }>`
	padding: ${({ neutralStyle }) => (neutralStyle ? "0" : "15px")};
	border: ${({ neutralStyle }) => (neutralStyle ? "none" : "2px solid #213547")};
	background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#21354750")};
	border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "12px")};
`;
