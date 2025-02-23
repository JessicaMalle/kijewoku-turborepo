import {Button, Main, Section} from "./App.styled.ts";
import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import PokerPad from "./components/PokerPad/PokerPad.tsx";
import SaveControls from "./components/SaveControls.tsx";
import {useAppContext} from "./hooks/states/useAppContext.ts";
import {useChips} from "./hooks/states/useChips.ts";

function App() {
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
					<SaveControls />
				</div>
				<div>
					<h3>Total Bonus: +{totalMultiplier} CpC</h3>
					<Button type="button" onClick={buyPokerPad}>Buy Poker Pad ({nextPokerPadPrice}€)</Button>
					{pokerPads.map((pad, index) => (
						<PokerPad key={`${pad.uid}-${index}`} index={index} />
					))}
					<Hand />
				</div>
			</Section>
			<Section>
				<Deck />
			</Section>
		</Main>
	);
}

export default App;
