import type React from "react";
import type { SVGProps } from "react";
import { StyledSVG } from "./Icon.styles.ts";
import DocumentSvg from "@/assets/svg-not-found.svg";

interface IconProps extends SVGProps<SVGSVGElement> {
	src?: React.ComponentType<SVGProps<SVGSVGElement>>;
	size?: number;
}

function Icon({ src, size, ...props }: IconProps): React.ReactElement {
	return <StyledSVG as={src || DocumentSvg} $size={size} {...props} />;
}

export default Icon;
