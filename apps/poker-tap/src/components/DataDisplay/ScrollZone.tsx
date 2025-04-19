import type React from "react";
import type { ReactNode } from "react";
import { ScrollContainer } from "./ScrollZone.styles.ts";

interface ScrollZoneProps {
	maxHeight: number | string;
	children: ReactNode;
	className?: string;
}

function ScrollZone({ maxHeight, children }: ScrollZoneProps): React.ReactNode {
	return <ScrollContainer $maxHeight={maxHeight}>{children}</ScrollContainer>;
}

export default ScrollZone;
