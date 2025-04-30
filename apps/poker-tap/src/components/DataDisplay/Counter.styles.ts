import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledCounter = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 10px;
		background-color: ${colors.blue300};
		border: 2px solid ${colors.blue900};
		border-radius: 5px;
`;

export const LeftCounterPart = styled.div`
		display: flex;
		align-items: center;
		gap: 5px;
`;

export const CounterIcon = styled.div`
		border: 3px solid ${colors.blue900};
		border-radius: 50%;
`;

export const CounterLabel = styled.span`
		text-transform: uppercase;
		font-weight: 700;
		color: ${colors.neutral1600};
		text-shadow: 0 2px 0 ${colors.neutral300};
`;

export const CounterValue = styled.span`
    text-align: right;
    color: ${colors.neutral1600};
    font-size: 24px;
    font-weight: 700;
`;

export const CounterValueWrapper = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: ${colors.neutral100};
		padding: 0 10px;
		border-radius: 3px;
		border-bottom: 3px solid ${colors.neutral300};
    box-shadow: 0 0 0 2px ${colors.blue900};
`;
