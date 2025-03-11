import type React from "react";
import type {ReactNode} from "react";
import {StyledSection} from "./Section.styles.ts";

interface SectionProps {
  children: React.JSX.Element;
}

function Section({ children }: SectionProps): ReactNode {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section;
