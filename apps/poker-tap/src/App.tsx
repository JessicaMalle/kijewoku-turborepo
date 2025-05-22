import type { ReactNode } from "react";
import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import Controls from "./components/Layouts/Controls.tsx";
import { StyledSection } from "./components/Layouts/Section.styles.ts";
import { GameLayout, Header, Main, MeshGradientWrapper } from "./App.styles.ts";
import { useChips } from "./hooks/states/useChips.ts";
import useDigits from "./hooks/utils/useDigits.utils.ts";
import { PositionProvider } from "./context/PositionStore.tsx";
import { GameLoopProvider } from "./context/game-loop/GameLoopProvider.tsx";
import ItemShop from "./components/Items/ItemShop.tsx";
import BoosterShop from "./components/Boosters/BoosterShop.tsx";
import PlayedPokerPads from "./components/Layouts/PlayedPokerPadds.tsx";
import PokerPad from "./components/PokerPad/PokerPad.tsx";

function App(): ReactNode {
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({ value: totalBonus, digits: 2 });

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
							<PokerPad />
						</StyledSection>
						<div id="items">
							<ItemShop />
							<BoosterShop />
						</div>
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
