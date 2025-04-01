import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const StyledCounter = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 10px;
		background-color: ${colors.blues.cyan};
		border: 2px solid ${colors.blues.turquoise};
		border-radius: 5px;
`

export const LeftCounterPart = styled.div`
		display: flex;
		align-items: center;
		gap: 5px;
`

export const CounterIcon = styled.div`
		border: 3px solid ${colors.blues.turquoise};
		border-radius: 50%;
`

export const CounterLabel = styled.span`
		text-transform: uppercase;
		font-weight: 700;
		color: ${colors.neutrals.dark};
		text-shadow: 0 2px 0 ${colors.neutrals.veryPaleLight};
`

export const CounterValue = styled.span`
    text-align: right;
    color: ${colors.neutrals.dark};
    font-size: 24px;
    font-weight: 700;
`

export const CounterValueWrapper = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: ${colors.neutrals.white};
		padding: 0 10px;
		border-radius: 3px;
		border-bottom: 3px solid ${colors.neutrals.veryPaleLight};
    box-shadow: 0 0 0 2px ${colors.blues.turquoise};
`
