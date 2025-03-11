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
import {StyledSection} from "./components/Layouts/Section.styles.ts";
import {GameLayout, HandLayout, Header, Main} from "./App.styled.ts";

function App() {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({value: totalBonus, digits: 2})
	const formatedNextPokerPadPrice = useDigits({value: nextPokerPadPrice, digits: 0})

	return (
		<Main>
			<Header>
				<h1>Poker Tap</h1>
				<SaveControls />
			</Header>
            <GameLayout>
                <StyledSection id="chips-counter">
					<ChipsCounter />
                </StyledSection>
                <StyledSection id="big-chip">
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%'
					}}>
                    	<BigChip />
					</div>
                </StyledSection>
                <StyledSection id="poker-pads">
                    <div>
                        <h3>Total Bonus: +{formatedTotalBonus} CpC</h3>
                        <button type="button" onClick={buyPokerPad}>Buy Poker Pad ({formatedNextPokerPadPrice}€)</button>
                    </div>
                    <div>
                        {pokerPads.map((pad, index) => (
                            <PokerPad key={`${pad.uid}-${index}`} index={index} />
                        ))}
                    </div>
                </StyledSection>
                <StyledSection id="items">
                    <Cursors />
                    <Croupiers />
                </StyledSection>
                <StyledSection id="deck">
                    <Deck />
                </StyledSection>
            </GameLayout>
			<HandLayout>
                <Hand />
			</HandLayout>
		</Main>
	);
}

export default App;
