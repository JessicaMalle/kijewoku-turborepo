import { useGoldenRatio } from "@kijewoku/hooks/screen";
import type { ReactNode } from "react";
import { useDimensions } from "../store";
import {
	Back,
	Bottom,
	Content,
	StyledDualBackgroundLayout,
	Top,
} from "./dual-background-layout.styles.tsx";

type DualBackgroundLayoutProps = {
	topChildren?: ReactNode;
	bottomChildren?: ReactNode;
	topBackgroundColor?: string;
	topAccentColor?: string;
	topBackgroundImage?: string;
};

function DualBackgroundLayout({
	topChildren,
	bottomChildren,
	topBackgroundColor,
	topAccentColor,
	topBackgroundImage,
}: DualBackgroundLayoutProps): ReactNode {
	const { dimensions } = useDimensions();
	const { get } = useGoldenRatio(dimensions);

	const BottomHeight = get(8);

	return (
		<StyledDualBackgroundLayout>
			<Back
				height={BottomHeight}
				topBackgroundColor={topBackgroundColor}
				topAccentColor={topAccentColor}
				topBackgroundImage={topBackgroundImage}
			>
				<div id="top-container">
					<div id="heart-white-pattern" />
					<div id="heart-white-pattern-overlay" />
				</div>
				<div id="bottom-container">
					<div id="stripe-pattern" />
				</div>
			</Back>
			<Content>
				<Top>{topChildren}</Top>
				<Bottom height={BottomHeight}>{bottomChildren}</Bottom>
			</Content>
		</StyledDualBackgroundLayout>
	);
}

export default DualBackgroundLayout;
