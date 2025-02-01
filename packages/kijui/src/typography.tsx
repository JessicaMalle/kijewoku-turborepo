import type { ReactNode } from "react";
import styled, { css } from "styled-components";

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  bold?: boolean;
  italic?: boolean;
  color?: string;
}

const shouldForwardProp = (prop: string) => !["bold", "italic", "color"].includes(prop);

const Typography = ({ as: Component = "p", children, className }: TypographyProps) => {
  return <Component className={className}>{children}</Component>;
};

const typographyStyles = css<Pick<TypographyProps, "bold" | "italic" | "color">>`
    ${({ bold }) => bold && "font-weight: bold;"}
    ${({ italic }) => italic && "font-style: italic;"}
    ${({ color }) => color && `color: ${color};`}
    margin: 0;
`;

const fontSizes = {
  title1: "2em",
  title2: "1.8rem",
  title3: "1.5rem",
  text: "1rem"
};

const Title1 = styled(Typography).withConfig({ shouldForwardProp }).attrs({ as: "h1" })`
    font-size: ${fontSizes.title1};
    ${typographyStyles}
`;

const Title2 = styled(Typography).withConfig({ shouldForwardProp }).attrs({ as: "h2" })`
    font-size: ${fontSizes.title2};
    ${typographyStyles}
`;

const Title3 = styled(Typography).withConfig({ shouldForwardProp }).attrs({ as: "h3" })`
    font-size: ${fontSizes.title3};
    ${typographyStyles}
`;

const Text = styled(Typography).withConfig({ shouldForwardProp }).attrs({ as: "p" })`
    font-size: ${fontSizes.text};
    ${typographyStyles}
`;

export default { Title1, Title2, Title3, Text };
