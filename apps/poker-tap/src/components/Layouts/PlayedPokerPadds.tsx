import { type ReactNode, useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import PlayedPokerPad from "../PokerPad/PlayedPokerPad.tsx";
import { StyledPlayedPokerPads } from "./PlayedPokerPads.styles.ts";
import { StyledSection } from "./Section.styles.ts";

function PlayedPokerPads(): ReactNode {
	const { playedPokerPads } = useAppContext();
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const handleWheel = (e: WheelEvent) => {
			if (scrollContainer) {
				e.preventDefault();
				scrollContainer.scrollLeft += e.deltaX || e.deltaY;
			}
		};

		scrollContainer?.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			scrollContainer?.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<StyledSection>
			<StyledPlayedPokerPads ref={scrollContainerRef}>
				{playedPokerPads.map((ppp, index) => {
					return <PlayedPokerPad key={ppp.uid} id={index} />;
				})}
			</StyledPlayedPokerPads>
		</StyledSection>
	);
}

export default PlayedPokerPads;
