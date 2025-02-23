import {Button, Main, Section} from "./App.styled.ts";
import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Hand from "./components/Hand/Hand.tsx";
import PokerPad from "./components/PokerPad/PokerPad.tsx";
import SaveControls from "./components/SaveControls.tsx";
import {useAppContext} from "./hooks/states/useAppContext.ts";
import {useChips} from "./hooks/states/useChips.ts";
import {useDeck} from "./hooks/states/useDeck.ts";

function App() {
	const { deck, shuffleDeck, revealDeck } = useDeck();
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
	const { totalMultiplier } = useChips();

	return (
		<Main>
			<Section>
				<h1>Poker Tap</h1>
				<ChipsCounter />
				<BigChip />
			</Section>
			<Section>
				<div>
					<h3>Total Multiplier: {totalMultiplier}%</h3>
					{pokerPads.map((pad, index) => (
						<PokerPad key={`${pad.uid}-${index}`} index={index} />
					))}
					<Hand />
				</div>
			</Section>
			<Section>
				<SaveControls />
				<Button type="button" onClick={shuffleDeck}>Shuffle deck</Button>
				<Button type="button" onClick={() => revealDeck(deck)}>Reveal deck</Button>
				<Button type="button" onClick={buyPokerPad}>Buy Poker Pad ({nextPokerPadPrice}€)</Button>
			</Section>
		</Main>
	);
}

export default App;
