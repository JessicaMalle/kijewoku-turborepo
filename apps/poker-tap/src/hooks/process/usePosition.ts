import { useContext } from "react";
import { PositionContext } from "../../context/PositionStore.tsx";

export const usePosition = () => {
	const context = useContext(PositionContext);

	if (!context) {
		throw new Error("usePosition must be used within a PositionProvider");
	}

	return context;
};
