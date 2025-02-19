import "./App.css";
import SaveControls from "../components/SaveControls.tsx";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";
import {useHand} from "./hooks/useHand.ts";

function App() {
	const { chips, addChips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();
	const { hand, drawHand, toggleSelectedHandCard } = useHand();

	return (
		<main>
			<h1>Poker Tap</h1>
			<SaveControls />
			<p>Chips: {chips}</p>
			{hand.handCards.map((card, index) => (
				// TODO: edit Biome configuration
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					key={`hand-card-${card.color}-${card.value}-i${index}`}
					style={{ color: card.active ? 'red' : 'black' }}
					onClick={() => toggleSelectedHandCard(index)}
				>
					{card.value} of {card.color}
				</div>
			))}
			<button type="button" onClick={drawHand}>Draw hand</button>
			<button type="button" onClick={() => addChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={shuffleDeck}>Shuffle deck</button>
			<button type="button" onClick={() => revealDeck(deck)}>Reveal deck</button>
		</main>
	);
}

export default App;
