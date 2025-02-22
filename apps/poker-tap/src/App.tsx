import "./App.css";
import Hand from "../components/Hand/Hand.tsx";
import PokerPad from "../components/PokerPad/PokerPad.tsx";
import SaveControls from "../components/SaveControls.tsx";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";

function App() {
	const { chips, addChips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();

	return (
		<main>
			<h1>Poker Tap</h1>
			<SaveControls/>
			<p>Chips: {chips}</p>
			<button type="button" onClick={() => addChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={shuffleDeck}>Shuffle deck</button>
			<button type="button" onClick={() => revealDeck(deck)}>Reveal deck</button>
			<PokerPad/>
			<Hand/>
		</main>
	);
}

export default App;
