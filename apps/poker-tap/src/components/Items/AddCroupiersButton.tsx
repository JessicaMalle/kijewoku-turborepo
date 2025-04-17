import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";
import Button from "../Button/Button.tsx";

function AddCroupiersButton() {
	const { croupiers, buyCroupier } = useAppContext();
	const nextCroupierPrice = CroupierService.calculateCroupierCost(
		croupiers.length,
	);
	const formattedPrice = useDigits({ value: nextCroupierPrice, digits: 0 });

	return (
		<Button
			label={`${formattedPrice}€`}
			onClick={buyCroupier}
			disabled={false}
			type="button"
		/>
	);
}

export default AddCroupiersButton;
