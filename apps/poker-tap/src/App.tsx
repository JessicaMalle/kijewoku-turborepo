import "./App.css";
import {useChips} from "./hooks/useChips.ts";

function App() {
	const { chips, handleAddChips } = useChips();

	return (
		<main>
			<h1>Poker Tap</h1>
			<p>Chips: {chips}</p>
			<button type="button" onClick={() => handleAddChips(1)}>Add 1 Chip</button>
		</main>
	);
}

export default App;
