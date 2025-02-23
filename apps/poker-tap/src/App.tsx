import {Button, Main, Section} from "./App.styled.ts";
import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Hand from "./components/Hand/Hand.tsx";
import PokerPad from "./components/PokerPad/PokerPad.tsx";
import SaveControls from "./components/SaveControls.tsx";
import {useDeck} from "./hooks/states/useDeck.ts";

function App() {
	const { deck, shuffleDeck, revealDeck } = useDeck();

	return (
		<Main>
			<Section>
				<h1>Poker Tap</h1>
				<ChipsCounter />
				<BigChip />
			</Section>
			<Section>
				<div>
					<PokerPad />
					<Hand />
				</div>
			</Section>
			<Section>
				<SaveControls />
				<Button type="button" onClick={shuffleDeck}>Shuffle deck</Button>
				<Button type="button" onClick={() => revealDeck(deck)}>Reveal deck</Button>
			</Section>
		</Main>
	);
}

export default App;
