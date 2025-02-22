import "./App.css";
import Card from "../components/Card/Card.tsx";
import PokerPad from "../components/PokerPad/PokerPad.tsx";
import SaveControls from "../components/SaveControls.tsx";
import {useChips} from "./hooks/useChips.ts";
import {useDeck} from "./hooks/useDeck.ts";
import {useHand} from "./hooks/useHand.ts";

function App() {
	const { chips, addChips } = useChips();
	const { deck, shuffleDeck, revealDeck } = useDeck();
	const { hand, drawHand } = useHand();

	return (
		<main>
			<h1>Poker Tap</h1>
			<SaveControls />
			<p>Chips: {chips}</p>
			<PokerPad />
			{hand.handCards.map((card, index) => (
				<Card
					{...card}
					index={index}
					key={`hand-card-${card.color}-${card.value}-i${index}`}
				/>
			))}
			<button type="button" onClick={drawHand}>Draw hand</button>
			<button type="button" onClick={() => addChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={shuffleDeck}>Shuffle deck</button>
			<button type="button" onClick={() => revealDeck(deck)}>Reveal deck</button>
		</main>
	);
}

export default App;
