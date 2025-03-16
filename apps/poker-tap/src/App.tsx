import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import Croupiers from "./components/Items/Croupiers.tsx";
import Cursors from "./components/Items/Cursors.tsx";
import SaveControls from "./components/SaveControls.tsx";
import { StyledSection } from "./components/Layouts/Section.styles.ts";
import { GameLayout, Header, Main } from "./App.styles.ts";
import PokerPads from "./components/Layouts/PokerPads.tsx";
import type {ReactNode} from "react";

function App(): ReactNode {
	return (
		<Main>
			<Header>
				<h1>Poker Tap</h1>
				<SaveControls />
			</Header>
			<GameLayout>
				<StyledSection id="chips-counter">
					<ChipsCounter />
				</StyledSection>
				<StyledSection id="big-chip">
					<BigChip />
				</StyledSection>
				<StyledSection id="poker-pads" neutralStyle>
					<PokerPads />
				</StyledSection>
				<StyledSection id="items">
					<Cursors />
					<Croupiers />
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
