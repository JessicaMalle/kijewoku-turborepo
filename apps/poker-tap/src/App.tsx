import "./App.css";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";

function App() {
	const { chips, handleAddChips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();

	return (
		<main>
			<h1>Poker Tap</h1>
			<p>Chips: {chips}</p>
			<button type="button" onClick={() => handleAddChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={shuffleDeck}>Shuffle deck</button>
			<button type="button" onClick={() => revealDeck(deck)}>Reveal deck</button>
		</main>
	);
}

export default App;
