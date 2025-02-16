import "./App.css";
import {useGame} from "./hooks/useGame.ts";

function App() {
	const { chips, hands, clickerBonus, addChips, buyHand, addClickerBonus } = useGame();

	return (
		<main>
			<h1>Poker Tap</h1>
			<p>Chips: {chips}</p>
			<p>Hands: {hands}</p>
			<p>Clicker Bonus: {clickerBonus}</p>
			<button type="button" onClick={() => addChips(1)}>Add 1 Chip</button>
			<button type="button" onClick={buyHand}>Buy Hand</button>
			<button type="button" onClick={() => addClickerBonus(5)}>Add 5 Clicker Bonus</button>
		</main>
	);
}

export default App;
