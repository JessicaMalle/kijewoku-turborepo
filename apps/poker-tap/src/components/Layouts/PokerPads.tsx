import type {ReactNode} from "react";
import {PokerPadsTopNav, StyledPokerPadsWrapper} from "./StyledPokerPadsWrapper.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import {useChips} from "../../hooks/states/useChips.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import {useAppContext} from "../../hooks/states/useAppContext.ts";

function PokerPads(): ReactNode {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
	const { totalBonus } = useChips();
	const formatedTotalBonus = useDigits({value: totalBonus, digits: 2});
	const formatedNextPokerPadPrice = useDigits({value: nextPokerPadPrice, digits: 0});


	return (
		<StyledPokerPadsWrapper>
			<PokerPadsTopNav>
				<h3>Total Bonus: +{formatedTotalBonus} CpC</h3>
				<button type="button" onClick={buyPokerPad}>Buy Poker Pad ({formatedNextPokerPadPrice}€)</button>
			</PokerPadsTopNav>
			{pokerPads.map((pad, index) => (
				<PokerPad key={`${pad.uid}-${index}`} cardId={index} />
			))}
		</StyledPokerPadsWrapper>
	);
}

export default PokerPads;
