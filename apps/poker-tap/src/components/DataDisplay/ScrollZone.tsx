import type React from "react";
import type { ReactNode } from "react";
import { ScrollContainer } from "./ScrollZone.styles.ts";

interface ScrollZoneProps {
	minHeight: number | string | null;
	maxHeight: number | string;
	children: ReactNode;
	className?: string;
}

function ScrollZone({
	minHeight,
	maxHeight,
	children,
}: ScrollZoneProps): React.ReactNode {
	return (
		<ScrollContainer $minHeight={minHeight} $maxHeight={maxHeight}>
			{children}
		</ScrollContainer>
	);
}

export default ScrollZone;
