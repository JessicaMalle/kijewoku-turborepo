import { useSave } from "../../hooks/states/useSave.ts";
import Button from "../Button/Button.tsx";
import { StyledControls } from "./SaveControles.styles.ts";
import { useDeck } from "../../hooks/states/useDeck.ts";

const Controls = () => {
	const { saveGame, clearSave } = useSave();
	const { deck, revealDeck } = useDeck();
	return (
		<StyledControls>
			<Button label={"Reveal deck"} onClick={() => revealDeck(deck)} />
			<Button label={"Save Game"} onClick={saveGame} />
			<Button label={"Clear Save"} onClick={clearSave} />
		</StyledControls>
	);
};

export default Controls;
