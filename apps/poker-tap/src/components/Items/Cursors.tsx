import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CursorService from "../../services/CursorService.ts";
import Button from "../Button/Button.tsx";

function Cursors() {
	const { cursors, buyCursor } = useAppContext();
	const nextCursorPrice = CursorService.calculateCursorCost(cursors);
	const formattedPrice = useDigits({ value: nextCursorPrice, digits: 0 });

	return (
		<Button
			label={`${formattedPrice}€`}
			onClick={buyCursor}
			disabled={false}
			type="button"
		/>
	);
}

export default Cursors;
