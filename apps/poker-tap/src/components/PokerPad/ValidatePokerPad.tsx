import type { ReactNode } from "react";
import {
	FloatPokerPadButtonWrapper,
	PokerPadCardsSection,
	PokerPadHead,
	StyledPokerPadInfos,
	StyledPokerPadPlaceholder,
} from "./PokerPad.styles.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Button from "../Button/Button.tsx";
import Title from "../Typography/Typography.tsx";
import { StyledCardPlaceholder } from "../Card/CardPlaceholder.styles.ts";

function ValidatePokerPad(): ReactNode {
	const { validatePokerPad } = useAppContext();

	return (
		<div>
			<StyledPokerPadPlaceholder>
				<FloatPokerPadButtonWrapper>
					<Button
						label="Validate Poker Pad"
						onClick={validatePokerPad}
					/>
				</FloatPokerPadButtonWrapper>
				<PokerPadHead>
					<StyledPokerPadInfos>
						<Title level={3}>Validate Current Poker Pad</Title>
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
						Validate to freeze this poker pad and get a new one!
					</StyledPokerPadInfos>
				</PokerPadCardsSection>
			</StyledPokerPadPlaceholder>
		</div>
	);
}

export default ValidatePokerPad;
