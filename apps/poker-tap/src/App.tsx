import BigChip from "../components/Chips/BigChip.tsx";
import Hand from "../components/Hand/Hand.tsx";
import PokerPad from "../components/PokerPad/PokerPad.tsx";
import SaveControls from "../components/SaveControls.tsx";
import {Button, Main, Section} from "./App.styled.ts";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";

function App() {
	const { chips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();

	return (
		<Main>
			<Section>
				<h1>Poker Tap</h1>
				<h2>Chips: {chips}</h2>
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
