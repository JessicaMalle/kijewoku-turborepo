import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import SaveControls from "./components/Layouts/SaveControls.tsx";
import { StyledSection } from "./components/Layouts/Section.styles.ts";
import { GameLayout, Header, Main } from "./App.styles.ts";
import PokerPads from "./components/Layouts/PokerPads.tsx";
import type {ReactNode} from "react";
import ShopSection from "./components/Layouts/ShopSection.tsx";
import {useChips} from "./hooks/states/useChips.ts";
import useDigits from "./hooks/utils/useDigits.utils.ts";

function App(): ReactNode {
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({value: totalBonus, digits: 2});

	return (
		<Main>
			<Header>
				<h1>Poker Tap</h1>
				<SaveControls />
			</Header>
			<GameLayout>
				<StyledSection id="big-chip">
					<div>
						<ChipsCounter />
						<div>Total Bonus: +{formatedTotalBonus} CpC</div>
						<BigChip scale={1.5} />
					</div>
				</StyledSection>
				<StyledSection id="poker-pads" neutralStyle>
					<PokerPads />
				</StyledSection>
				<StyledSection id="items">
					<ShopSection />
				</StyledSection>
				<StyledSection id="deck">
					<Deck />
				</StyledSection>
			</GameLayout>
			<StyledSection id="hand" neutralStyle>
				<Hand />
			</StyledSection>
		</Main>
	);
}

export default App;
