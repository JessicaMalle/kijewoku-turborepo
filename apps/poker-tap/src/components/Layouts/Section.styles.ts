import styled from "styled-components";

export const StyledSection = styled.section<{ neutralStyle?: boolean }>`
    background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#3859b3")};
    border: ${({ neutralStyle }) => (neutralStyle ? "0" : "3px solid #3e3b65")};
    border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "6px")};
    box-shadow: ${({ neutralStyle }) => (neutralStyle ? "0" : "-1px 1px 10px 0px #00000040")};
		> div {
				width: ${({ neutralStyle }) => (neutralStyle ? "100%" : "calc(100% - 2px - 30px)")};
        height: ${({ neutralStyle }) => (neutralStyle ? "auto" : "calc(100% - 30px - 2px - 5px)")};
        padding: ${({ neutralStyle }) => (neutralStyle ? "0" : "15px")};
        background-color: ${({ neutralStyle }) => (neutralStyle ? "transparent" : "#3388de")};
        border-radius: ${({ neutralStyle }) => (neutralStyle ? "0" : "4px")};
				border: ${({ neutralStyle }) => (neutralStyle ? "0" : "1px solid #36c5f4")};
    }
`;
