import "./App.css";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";
import {useHand} from "./hooks/useHand.ts";

function App() {
	const { chips, handleAddChips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();
	const { hand, drawHand } = useHand();

	return (
		<main>
			<h1>Poker Tap</h1>
			<p>Chips: {chips}</p>
			{hand.cards.map((card, index) => (
				<div key={`hand-card-${card.color}-${card.value}-i${index}`}>
					{card.value} of {card.color}
				</div>
			))}
			<button type="button" onClick={drawHand}>Draw hand</button>
			<button type="button" onClick={() => handleAddChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={shuffleDeck}>Shuffle deck</button>
			<button type="button" onClick={() => revealDeck(deck)}>Reveal deck</button>
		</main>
	);
}

export default App;
