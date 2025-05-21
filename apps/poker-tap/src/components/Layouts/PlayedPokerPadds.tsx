import { type ReactNode, useEffect, useRef, useState, ChangeEvent } from "react";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import PlayedPokerPad from "../PokerPad/PlayedPokerPad.tsx";
import { StyledPlayedPokerPads } from "./PlayedPokerPads.styles.ts";
import { StyledSection } from "./Section.styles.ts";

function PlayedPokerPads(): ReactNode {
	const { playedPokerPads } = useAppContext();
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState<number>(20); // Default to 20% (similar to 'small')

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

	const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSize(Number(e.target.value));
	};

	return (
		<StyledSection>
			<div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<label htmlFor="size-slider" style={{ marginRight: '10px' }}>Size: {size}%</label>
					<div style={{
						padding: '3px 8px',
						backgroundColor: '#4CAF50',
						color: 'white',
						borderRadius: '4px',
						fontSize: '12px'
					}}>
						{size <= 20 ? 'Small' : size <= 35 ? 'Medium' : 'Large'}
					</div>
				</div>
				<input
					id="size-slider"
					type="range"
					min="10"
					max="100"
					value={size}
					onChange={handleSizeChange}
					style={{
						width: '100%',
						height: '20px',
						cursor: 'pointer'
					}}
				/>
			</div>
			<StyledPlayedPokerPads ref={scrollContainerRef}>
				{playedPokerPads.map((ppp, index) => {
					return <PlayedPokerPad key={ppp.uid} id={index} size={size} />;
				})}
			</StyledPlayedPokerPads>
		</StyledSection>
	);
}

export default PlayedPokerPads;
