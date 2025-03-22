import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

interface StyledPokerChipProps {
  value: string;
  accentColor: string;
  primaryColor: string;
  secondaryColor: string;
  scale?: number; // Paramètre multiplicateur pour la taille
}

export const StyledPokerChip = styled.div<StyledPokerChipProps>`
  position: relative;
  width: ${props => 151 * (props.scale || 1)}px; /* Largeur multipliée par scale */
  height: ${props => 151 * (props.scale || 1)}px; /* Hauteur multipliée par scale */
  border-radius: 100%;
  background-size: ${props => 151 * (props.scale || 1)}px ${props => 151 * (props.scale || 1)}px;
  background-position: center center;
  cursor: pointer;
  border-bottom: ${props => 5 * (props.scale || 1)}px solid ${props => props.accentColor};

  box-shadow: 0 0 0 ${props => 4 * (props.scale || 1)}px ${colors.neutrals.dark};

  &:before {
    position: absolute;
    content: "";
    width: ${props => 117 * (props.scale || 1)}px;
    height: ${props => 117 * (props.scale || 1)}px;
    border-radius: 100%;
    top: ${props => 9 * (props.scale || 1)}px;
    left: ${props => 9 * (props.scale || 1)}px;
    background-size: ${props => 151 * (props.scale || 1)}px ${props => 151 * (props.scale || 1)}px;
    background-position: center center;
  }

  &:after {
    position: absolute;
    font: bold ${props => 50 * (props.scale || 1)}px/${props => 111 * (props.scale || 1)}px sans-serif;
    width: ${props => 111 * (props.scale || 1)}px;
    height: ${props => 111 * (props.scale || 1)}px;
    border-radius: 100%;
    top: ${props => 20 * (props.scale || 1)}px;
    left: ${props => 20 * (props.scale || 1)}px;
    text-align: center;
  }

  background-image: linear-gradient(
      0deg,
      transparent 0,
      transparent ${props => 67.5 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 67.5 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 83.5 * (props.scale || 1)}px,
      transparent ${props => 83.5 * (props.scale || 1)}px,
      transparent ${props => 151 * (props.scale || 1)}px
    ),
    linear-gradient(
      60deg,
      transparent 0,
      transparent ${props => 97.4304 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 97.4304 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 113.4304 * (props.scale || 1)}px,
      transparent ${props => 113.4304 * (props.scale || 1)}px,
      transparent ${props => 151 * (props.scale || 1)}px
    ),
    linear-gradient(
      120deg,
      ${(props) => props.primaryColor} 0,
      ${(props) => props.primaryColor} ${props => 97.4304 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 97.4304 * (props.scale || 1)}px,
      ${(props) => props.accentColor} ${props => 113.4304 * (props.scale || 1)}px,
      ${(props) => props.primaryColor} ${props => 113.4304 * (props.scale || 1)}px,
      ${(props) => props.primaryColor} ${props => 151 * (props.scale || 1)}px
    );

  &:before {
    border: ${props => 8 * (props.scale || 1)}px solid ${(props) => props.primaryColor};
    background-image: linear-gradient(
        0deg,
        transparent 0,
        transparent ${props => 69.5 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 69.5 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 81.5 * (props.scale || 1)}px,
        transparent ${props => 81.5 * (props.scale || 1)}px,
        transparent ${props => 151 * (props.scale || 1)}px
      ),
      linear-gradient(
        30deg,
        transparent 0,
        transparent ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 151 * (props.scale || 1)}px
      ),
      linear-gradient(
        60deg,
        transparent 0,
        transparent ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 151 * (props.scale || 1)}px
      ),
      linear-gradient(
        90deg,
        transparent 0,
        transparent ${props => 69.5 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 69.5 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 81.5 * (props.scale || 1)}px,
        transparent ${props => 81.5 * (props.scale || 1)}px,
        transparent ${props => 151 * (props.scale || 1)}px
      ),
      linear-gradient(
        120deg,
        transparent 0,
        transparent ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 110.7104 * (props.scale || 1)}px,
        transparent ${props => 151 * (props.scale || 1)}px
      ),
      linear-gradient(
        150deg,
        ${(props) => props.secondaryColor} 0,
        ${(props) => props.secondaryColor} ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 98.7104 * (props.scale || 1)}px,
        ${(props) => props.accentColor} ${props => 110.7104 * (props.scale || 1)}px,
        ${(props) => props.secondaryColor} ${props => 110.7104 * (props.scale || 1)}px,
        ${(props) => props.secondaryColor} ${props => 151 * (props.scale || 1)}px
      );
  }

  &:after {
    content: "${(props) => props.value}";
    background: ${(props) => props.primaryColor};
    color: ${(props) => props.accentColor};
  }
`;

export const StyledBigChipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
