import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import SaveControls from "./components/Layouts/SaveControls.tsx";
import { StyledSection } from "./components/Layouts/Section.styles.ts";
import { GameLayout, Header, Main, MeshGradientWrapper } from "./App.styles.ts";
import PokerPads from "./components/Layouts/PokerPads.tsx";
import type { ReactNode } from "react";
import { useChips } from "./hooks/states/useChips.ts";
import useDigits from "./hooks/utils/useDigits.utils.ts";
import { PositionProvider } from "./context/PositionStore.tsx";
import { GameLoopProvider } from "./context/game-loop/GameLoopProvider.tsx";
import ItemShop from "./components/Items/ItemShop.tsx";

function App(): ReactNode {
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({ value: totalBonus, digits: 2 });

	return (
		<Main>
			<MeshGradientWrapper />
			<Header>
				<h1>Poker Tap</h1>
				<SaveControls />
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
						</StyledSection>
						<StyledSection id="items" $neutralStyle>
							<ItemShop />
						</StyledSection>
						<StyledSection id="deck">
							<Deck />
						</StyledSection>
					</GameLayout>
					<StyledSection id="hand" $neutralStyle>
						<Hand />
					</StyledSection>
				</PositionProvider>
			</GameLoopProvider>
		</Main>
	);
}

export default App;
