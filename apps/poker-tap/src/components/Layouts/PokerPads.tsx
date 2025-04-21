import type { ReactNode } from "react";
import { PokerPadsWrapperStyles } from "./PokerPadsWrapper.styles.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";

function PokerPads(): ReactNode {
	const { pokerPads } = useAppContext();

	return (
		<PokerPadsWrapperStyles>
			<p>
				<i>(Play card combinations to increase your Chips per click bonus!)</i>
			</p>
			{pokerPads.map((pad, index) => (
				<PokerPad key={`${pad.uid}-${index}`} id={index} />
			))}
		</PokerPadsWrapperStyles>
	);
}

export default PokerPads;
