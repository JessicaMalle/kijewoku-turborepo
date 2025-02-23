import {
	BigChipSection,
	Header,
	Main,
	PokerInfo,
	PokerPadSection,
	PokerPadWrapper,
	RightSection,
	ShopSection
} from "./App.styled.ts";
import BigChip from "./components/Chips/BigChip.tsx";
import ChipsCounter from "./components/Chips/ChipsCounter.tsx";
import Deck from "./components/Deck/Deck.tsx";
import Hand from "./components/Hand/Hand.tsx";
import Croupiers from "./components/Items/Croupiers.tsx";
import Cursors from "./components/Items/Cursors.tsx";
import PokerPad from "./components/PokerPad/PokerPad.tsx";
import SaveControls from "./components/SaveControls.tsx";
import {useAppContext} from "./hooks/states/useAppContext.ts";
import {useChips} from "./hooks/states/useChips.ts";
import useDigits from "./hooks/utils/useDigits.utils.ts";

function App() {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({value: totalBonus, digits: 2})
	const formatedNextPokerPadPrice = useDigits({value: nextPokerPadPrice, digits: 0})

	return (
		<Main>
			<BigChipSection>
				<ChipsCounter />
				<BigChip />
			</BigChipSection>
			<PokerPadSection>
				<Header>
					<h1>Poker Tap</h1>
					<div>
						<SaveControls />
					</div>
				</Header>
				<PokerInfo>
					<h3>Total Bonus: +{formatedTotalBonus} CpC</h3>
					<button type="button" onClick={buyPokerPad}>Buy Poker Pad ({formatedNextPokerPadPrice}€)</button>
				</PokerInfo>
				<PokerPadWrapper>
					{pokerPads.map((pad, index) => (
						<PokerPad key={`${pad.uid}-${index}`} index={index} />
					))}
				</PokerPadWrapper>
				<Hand />
			</PokerPadSection>
			<RightSection>
				<ShopSection>
					<Cursors />
					<Croupiers />
				</ShopSection>
				<Deck />
			</RightSection>
		</Main>
	);
}

export default App;
