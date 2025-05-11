import type React from "react";
import styled from "styled-components";

type DicierMode = "Round" | "Flat" | "Block" | "Pixel";
type DicierWeight = "Light" | "Heavy" | "Dark";

interface DicierIconProps {
	code: string;
	size?: string;
	color?: string;
	className?: string;
	mode?: DicierMode;
	weight?: DicierWeight;
}

const StyledDicierIcon = styled.span<{
	$size?: string;
	$color?: string;
	$mode: DicierMode;
	$weight: DicierWeight;
}>`
  font-size: ${({ $size }) => $size || "inherit"};
  color: ${({ $color }) => $color || "inherit"};
  display: inline-block;
  line-height: 1;
  font-family: ${({ $mode, $weight }) =>
		$mode === "Pixel" ? "Dicier-Pixel" : `Dicier-${$mode}-${$weight}`};
`;

/**
 * DicierIcon component for displaying game-related icons using the Dicier font
 *
 * @param code - The Dicier code to display (e.g., "HEARTS", "SPADES", "ACE_HEARTS")
 * @param size - The font size (e.g., "20px", "1.5rem")
 * @param color - The icon color
 * @param className - Additional CSS class
 * @param mode - The Dicier mode (Round, Flat, Block, Pixel)
 * @param weight - The Dicier weight (Light, Heavy, Dark)
 */
const DicierIcon: React.FC<DicierIconProps> = ({
	code,
	size,
	color,
	className,
	mode = "Round",
	weight = "Heavy",
}: DicierIconProps) => {
	return (
		<StyledDicierIcon
			className={`dicier ${className || ""}`}
			$size={size}
			$color={color}
			$mode={mode}
			$weight={weight}
		>
			{code}
		</StyledDicierIcon>
	);
};

export default DicierIcon;
