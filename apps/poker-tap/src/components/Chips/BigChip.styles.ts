import styled from "styled-components";

interface StyledPokerChipProps {
  value: string;
  linesColor: string;
  backgroundColor: string;
  backLinesColor: string;
  darkBackgroundColor: string;
  textColor: string;
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

  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, ${(props) => props.linesColor} 67.5px, ${(props) => props.linesColor} 83.5px, transparent 83.5px, transparent 151px),
                    linear-gradient(60deg, transparent 0, transparent 97.4304px, ${(props) => props.linesColor} 97.4304px, ${(props) => props.linesColor} 113.4304px, transparent 113.4304px, transparent 151px),
                    linear-gradient(120deg, ${(props) => props.backgroundColor} 0, ${(props) => props.backgroundColor} 97.4304px, ${(props) => props.linesColor} 97.4304px, ${(props) => props.linesColor} 113.4304px, ${(props) => props.backgroundColor} 113.4304px, ${(props) => props.backgroundColor} 151px);

  &:before {
    border: 8px solid ${(props) => props.backgroundColor};
    background-image: linear-gradient(0deg, transparent 0, transparent 69.5px, ${(props) => props.backLinesColor} 69.5px, ${(props) => props.backLinesColor} 81.5px, transparent 81.5px, transparent 151px),
                      linear-gradient(30deg, transparent 0, transparent 98.7104px, ${(props) => props.backLinesColor} 98.7104px, ${(props) => props.backLinesColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(60deg, transparent 0, transparent 98.7104px, ${(props) => props.backLinesColor} 98.7104px, ${(props) => props.backLinesColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(90deg, transparent 0, transparent 69.5px, ${(props) => props.backLinesColor} 69.5px, ${(props) => props.backLinesColor} 81.5px, transparent 81.5px, transparent 151px),
                      linear-gradient(120deg, transparent 0, transparent 98.7104px, ${(props) => props.backLinesColor} 98.7104px, ${(props) => props.backLinesColor} 110.7104px, transparent 110.7104px, transparent 151px),
                      linear-gradient(150deg, ${(props) => props.darkBackgroundColor} 0, ${(props) => props.darkBackgroundColor} 98.7104px, ${(props) => props.backLinesColor} 98.7104px, ${(props) => props.backLinesColor} 110.7104px, ${(props) => props.darkBackgroundColor} 110.7104px, ${(props) => props.darkBackgroundColor} 151px);
  }

  &:after {
    content: "${(props) => props.value}";
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
  }
`;
