import type { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

interface TextButtonProps {
	label: string | ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

const textBorderColor = Colors.dark.softPurple;

const StyledTextButton = styled.button`
	all: unset;
	cursor: pointer;
	color: ${Colors.yellow.canary};
	font-weight: 700;
	transition: filter 0.2s ease;
	text-shadow: 
					0 1px 0 ${Colors.yellow.gold},
					0 2px 0 ${Colors.yellow.gold},
					
					0 3px 0 ${textBorderColor},
					0 -1px 0 ${textBorderColor},
					0 1px 0 ${textBorderColor},
					1px 0 0 ${textBorderColor},
					1px -1px 0 ${textBorderColor},
					1px 1px 0 ${textBorderColor},
					1px 2px 0 ${textBorderColor},
					1px 3px 0 ${textBorderColor},
					-1px 0 0 ${textBorderColor},
					-1px -1px 0 ${textBorderColor},
					-1px 1px 0 ${textBorderColor},
					-1px 2px 0 ${textBorderColor},
					-1px 3px 0 ${textBorderColor};

	&:hover {
		filter: brightness(1.05);
	}

	&:active {
		filter: brightness(1.1);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

function TextButton({
	label,
	onClick,
	disabled = false,
	type = "button",
}: TextButtonProps) {
	return (
		<StyledTextButton onClick={onClick} disabled={disabled} type={type}>
			{label}
		</StyledTextButton>
	);
}

export default TextButton;
