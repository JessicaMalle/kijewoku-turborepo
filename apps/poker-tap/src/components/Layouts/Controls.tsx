import { useSave } from "../../hooks/states/useSave.ts";
import Button from "../Button/Button.tsx";
import { StyledControls } from "./SaveControles.styles.ts";
import { useDeck } from "../../hooks/states/useDeck.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";

const Controls = () => {
	const { saveGame, clearSave } = useSave();
	const { deck, revealDeck } = useDeck();
	const { buyPokerPad, nextPokerPadPrice } = useAppContext();
	const formatedNextPokerPadPrice = useDigits({
		value: nextPokerPadPrice,
		digits: 0,
	});

	return (
		<StyledControls>
			<Button
				label={`Add Poker Pad (${formatedNextPokerPadPrice}€)`}
				onClick={buyPokerPad}
			/>
			<Button label={"Reveal deck"} onClick={() => revealDeck(deck)} />
			<Button label={"Save Game"} onClick={saveGame} />
			<Button label={"Clear Save"} onClick={clearSave} />
		</StyledControls>
	);
};

export default Controls;
