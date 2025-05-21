import { type ReactNode, useEffect } from "react";
import { PokerPadsWrapperStyles } from "./PokerPadsWrapper.styles.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import ValidatePokerPad from "../PokerPad/ValidatePokerPad.tsx";

function PokerPads(): ReactNode {
	const { pokerPads, validatePokerPad } = useAppContext();

	// If there are no poker pads, create a new one
	useEffect(() => {
		if (pokerPads.length === 0) {
			validatePokerPad();
		}
	}, [pokerPads.length, validatePokerPad]);

	return (
		<>
			<PokerPadsWrapperStyles>
				{pokerPads.length > 0 ? <PokerPad id={0} /> : <ValidatePokerPad />}
			</PokerPadsWrapperStyles>
		</>
	);
}

export default PokerPads;
