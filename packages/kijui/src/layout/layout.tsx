import { useGoldenRatio } from "@kijewoku/hooks/screen";
import type React from 'react';
import { useDimensions } from "../store";
import { StyledAside, StyledContent, StyledFooter, StyledHeader } from "./layout.styles.tsx";

interface LayoutComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<LayoutComponentProps> = ({ children, className }) => {
  const { dimensions } = useDimensions();
  const { get } = useGoldenRatio(dimensions);

  return <StyledHeader className={className} gr3={get(3)}>{children}</StyledHeader>;
};

const Content: React.FC<LayoutComponentProps> = ({ children, className }) => {
  return <StyledContent className={className}>{children}</StyledContent>;
};

const Footer: React.FC<LayoutComponentProps> = ({ children, className }) => {
  return <StyledFooter className={className}>{children}</StyledFooter>;
};

const Aside: React.FC<LayoutComponentProps> = ({ children, className }) => {
  const { dimensions } = useDimensions();
  const { get } = useGoldenRatio(dimensions);

  return <StyledAside className={className} width={get(3)}>{children}</StyledAside>;
};

export default { Header, Content, Footer, Aside };
