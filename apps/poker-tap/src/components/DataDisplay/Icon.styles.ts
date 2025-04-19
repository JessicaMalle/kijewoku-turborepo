import styled from "styled-components";

export const StyledSVG = styled.svg<{ $size?: number }>`
  width: ${(props) => (props.$size ? `${props.$size}px` : "24px")};
  height: ${(props) => (props.$size ? `${props.$size}px` : "24px")};
  transition: all 0.2s ease;
`;
