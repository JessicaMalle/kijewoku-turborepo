import type { ReactNode } from "react";
import {
	FloatPokerPadButtonWrapper,
	PokerPadCardsSection,
	PokerPadHead,
	StyledPokerPadInfos,
	StyledPokerPadPlaceholder,
} from "./PokerPad.styles.ts";
import { useChips } from "../../hooks/states/useChips.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import Button from "../Button/Button.tsx";
import Title from "../Typography/Typography.tsx";
import { StyledCardPlaceholder } from "../Card/CardPlaceholder.styles.ts";

function BuyPokerPad(): ReactNode {
	const { chips } = useChips();
	const { buyPokerPad, nextPokerPadPrice } = useAppContext();
	const formatedNextPokerPadPrice = useDigits({
		value: nextPokerPadPrice,
		digits: 0,
	});

	return (
		<div>
			<StyledPokerPadPlaceholder>
				<FloatPokerPadButtonWrapper>
					<Button
						label={`Add Poker Pad (${formatedNextPokerPadPrice}€)`}
						disabled={nextPokerPadPrice > chips}
						onClick={buyPokerPad}
					/>
				</FloatPokerPadButtonWrapper>
				<PokerPadHead>
					<StyledPokerPadInfos>
						<Title level={3}>Our new Poker Pad!</Title>
					</StyledPokerPadInfos>
				</PokerPadHead>
				<PokerPadCardsSection>
					<div>
						<StyledCardPlaceholder $noHover $invisible />
						<StyledCardPlaceholder $noHover $invisible />
						<StyledCardPlaceholder $noHover $invisible />
						<StyledCardPlaceholder $noHover $invisible />
						<StyledCardPlaceholder $noHover $invisible />
					</div>
					<StyledPokerPadInfos>
						Unlock the POWER for {formatedNextPokerPadPrice}€ !!!
					</StyledPokerPadInfos>
				</PokerPadCardsSection>
			</StyledPokerPadPlaceholder>
		</div>
	);
}

export default BuyPokerPad;
