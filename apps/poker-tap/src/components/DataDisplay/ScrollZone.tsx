import type React from "react";
import type { ReactNode } from "react";
import { ScrollContainer } from "./ScrollZone.styles.ts";

interface ScrollZoneProps {
	minHeight?: number | string | null;
	maxHeight?: number | string;
	children: ReactNode;
	fullHeight?: boolean;
	className?: string;
}

function ScrollZone({
	minHeight,
	maxHeight,
	fullHeight,
	children,
}: ScrollZoneProps): React.ReactNode {
	return (
		<ScrollContainer
			$minHeight={minHeight}
			$maxHeight={maxHeight}
			$fullHeight={fullHeight}
		>
			{children}
		</ScrollContainer>
	);
}

export default ScrollZone;
