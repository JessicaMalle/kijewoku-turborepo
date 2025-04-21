import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import Controls from "./components/Layouts/Controls.tsx";
import { StyledSection } from "./components/Layouts/Section.styles.ts";
import { GameLayout, Header, Main, MeshGradientWrapper } from "./App.styles.ts";
import PokerPads from "./components/Layouts/PokerPads.tsx";
import type { ReactNode } from "react";
import { useChips } from "./hooks/states/useChips.ts";
import useDigits from "./hooks/utils/useDigits.utils.ts";
import { PositionProvider } from "./context/PositionStore.tsx";
import { GameLoopProvider } from "./context/game-loop/GameLoopProvider.tsx";
import ItemShop from "./components/Items/ItemShop.tsx";
import { useAppContext } from "./hooks/states/useAppContext.ts";
import PlayedPokerPad from "./components/PokerPad/PlayedPokerPad.tsx";

function App(): ReactNode {
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({ value: totalBonus, digits: 2 });
	const { playedPokerPads } = useAppContext();

	return (
		<Main>
			<MeshGradientWrapper />
			<Header>
				<h1>Poker Tap</h1>
				<Controls />
			</Header>
			<GameLoopProvider>
				<PositionProvider>
					<GameLayout>
						<StyledSection id="big-chip">
							<div>
								<ChipsCounter />
								<div>Total Bonus: +{formatedTotalBonus} CpC</div>
								<BigChip scale={1.5} />
							</div>
						</StyledSection>
						<StyledSection id="poker-pads" $neutralStyle>
							<PokerPads />
							<div>
								{playedPokerPads.map((ppp, index) => (
									<PlayedPokerPad
										key={`played-poker-pads-${ppp.uid}}`}
										id={index}
									/>
								))}
							</div>
						</StyledSection>
						<StyledSection id="items" $neutralStyle>
							<ItemShop />
						</StyledSection>
					</GameLayout>
					<StyledSection id="hand" $neutralStyle>
						<Hand />
						<Deck />
					</StyledSection>
				</PositionProvider>
			</GameLoopProvider>
		</Main>
	);
}

export default App;
