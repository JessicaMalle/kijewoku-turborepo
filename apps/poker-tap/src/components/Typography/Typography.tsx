import type { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

interface TitleProps {
	children: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

const textBorderColor = Colors.dark.softPurple;

const StyledTitle = styled.div`
	margin: 0;
	color: ${Colors.neutral.white};
	font-weight: 700;
	text-shadow: 
					0 1px 0 ${Colors.neutral.slate},
					0 2px 0 ${Colors.neutral.slate},

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
`;

const Title = ({ children, level }: TitleProps): ReactNode => {
	const Tag =
		`h${level > 0 && level < 7 ? level : 1}` as keyof JSX.IntrinsicElements;
	return <StyledTitle as={Tag}>{children}</StyledTitle>;
};

export default Title;
