import React from 'react';
import Button from './Button';
import DicierIcon from '../DicierIcon/DicierIcon';
import styled from 'styled-components';

interface ButtonWithIconProps {
  label: string;
  iconCode: string;
  iconPosition?: 'left' | 'right';
  iconSize?: string;
  iconMode?: 'Round' | 'Flat' | 'Block' | 'Pixel';
  iconWeight?: 'Light' | 'Heavy' | 'Dark';
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fontSize?: string | number;
  hasTextShadow?: boolean;
}

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  margin-right: 8px;
`;

/**
 * ButtonWithIcon component that extends the Button component to include a Dicier icon
 */
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  label,
  iconCode,
  iconPosition = 'right',
  iconSize = '1.2em',
  iconMode = 'Round',
  iconWeight = 'Heavy',
  ...buttonProps
}) => {
  const iconElement = (
    <IconWrapper>
      <DicierIcon
        code={iconCode}
        size={iconSize}
        mode={iconMode}
        weight={iconWeight}
      />
    </IconWrapper>
  );

  const content = iconPosition === 'left'
    ? <>{iconElement} {label}</>
    : <>{label} {iconElement}</>;

  return (
    <Button
      {...buttonProps}
      label={content}
    />
  );
};

export default ButtonWithIcon;
