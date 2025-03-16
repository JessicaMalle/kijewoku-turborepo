import type React from "react";
import type {ReactNode} from "react";
import {StyledSection} from "./Section.styles.ts";

interface SectionProps {
  children: React.JSX.Element;
  neutralStyle?: boolean;
}

function Section({ children, neutralStyle }: SectionProps): ReactNode {
  return (
    <StyledSection neutralStyle={neutralStyle}>
      {children}
    </StyledSection>
  )
}

export default Section;
