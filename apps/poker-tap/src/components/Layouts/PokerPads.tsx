import { type ReactNode, useState } from "react";
import { PokerPadsWrapperStyles } from "./PokerPadsWrapper.styles.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import BuyPokerPad from "../PokerPad/BuyPokerPad.tsx";

function PokerPads(): ReactNode {
	const { pokerPads } = useAppContext();

	const [activeId, setActiveId] = useState<number>(0);

	return (
		<>
			<PokerPadsWrapperStyles>
				{pokerPads[activeId] ? <PokerPad id={activeId} /> : <BuyPokerPad />}
				<button
					type="button"
					onClick={() =>
						setActiveId((prevState) => (prevState + 1 > 2 ? 0 : prevState + 1))
					}
				>
					Next
				</button>
			</PokerPadsWrapperStyles>
			<div style={{ textAlign: "center", color: "#3C3C3C" }}>
				{activeId + 1}/3
			</div>
		</>
	);
}

export default PokerPads;
