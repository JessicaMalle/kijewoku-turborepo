import styled from "styled-components";

interface StyledPokerChipProps {
  value: string;
  accentColor: string;
  primaryColor: string;
  secondaryColor: string;
}

export const StyledPokerChip = styled.div<StyledPokerChipProps>`
  position: relative;
  width: 151px;
  height: 151px;
  border-radius: 100%;
  background-size: 151px 151px;
  background-position: center center;
  cursor: pointer;
  transition: 200ms;

  &:active {
    transform: scale(90%);
  }

  &:before {
    position: absolute;
    content: "";
    width: 117px;
    height: 117px;
    border-radius: 100%;
    top: 9px;
    left: 9px;
    background-size: 151px 151px;
    background-position: center center;
  }

  &:after {
    position: absolute;
    font: bold 50px/111px sans-serif;
    width: 111px;
    height: 111px;
    border-radius: 100%;
    top: 20px;
    left: 20px;
  }

  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, ${(props) => props.accentColor} 67.5px, ${(props) => props.accentColor} 83.5px, transparent 83.5px, transparent 151px),
                    linear-gradient(60deg, transparent 0, transparent 97.4304px, ${(props) => props.accentColor} 97.4304px, ${(props) => props.accentColor} 113.4304px, transparent 113.4304px, transparent 151px),
                    linear-gradient(120deg, ${(props) => props.primaryColor} 0, ${(props) => props.primaryColor} 97.4304px, ${(props) => props.accentColor} 97.4304px, ${(props) => props.accentColor} 113.4304px, ${(props) => props.primaryColor} 113.4304px, ${(props) => props.primaryColor} 151px);

  &:before {
    border: 8px solid ${(props) => props.primaryColor};
    background-image: linear-gradient(0deg, transparent 0, transparent 69.5px, ${(props) => props.accentColor} 69.5px, ${(props) => props.accentColor} 81.5px, transparent 81.5px, transparent 151px),
                      linear-gradient(30deg, transparent 0, transparent 98.7104px, ${(props) => props.accentColor} 98.7104px, ${(props) => props.accentColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(60deg, transparent 0, transparent 98.7104px, ${(props) => props.accentColor} 98.7104px, ${(props) => props.accentColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(90deg, transparent 0, transparent 69.5px, ${(props) => props.accentColor} 69.5px, ${(props) => props.accentColor} 81.5px, transparent 81.5px, transparent 151px),
                      linear-gradient(120deg, transparent 0, transparent 98.7104px, ${(props) => props.accentColor} 98.7104px, ${(props) => props.accentColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(150deg, ${(props) => props.secondaryColor} 0, ${(props) => props.secondaryColor} 98.7104px, ${(props) => props.accentColor} 98.7104px, ${(props) => props.accentColor} 110.7104px, ${(props) => props.secondaryColor} 110.7104px, ${(props) => props.secondaryColor} 151px);
  }

  &:after {
    content: "${(props) => props.value}";
    background: ${(props) => props.primaryColor};
    color: ${(props) => props.accentColor};
  }
`;
