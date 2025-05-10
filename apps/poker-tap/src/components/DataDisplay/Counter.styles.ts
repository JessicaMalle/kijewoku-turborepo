import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const StyledCounter = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 10px;
		background-color: ${Colors.blue.azure};
		border: 2px solid ${Colors.blue.navy};
		border-radius: 5px;
`;

export const LeftCounterPart = styled.div`
		display: flex;
		align-items: center;
		gap: 5px;
`;

export const CounterIcon = styled.div`
		border: 3px solid ${Colors.blue.navy};
		border-radius: 50%;
`;

export const CounterLabel = styled.span`
		text-transform: uppercase;
		font-weight: 700;
		color: ${Colors.dark.nightPurple};
		text-shadow: 0 2px 0 ${Colors.neutral.mint};
`;

export const CounterValue = styled.span`
    text-align: right;
    color: ${Colors.dark.nightPurple};
    font-size: 24px;
    font-weight: 700;
`;

export const CounterValueWrapper = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: ${Colors.neutral.white};
		padding: 0 10px;
		border-radius: 3px;
		border-bottom: 3px solid ${Colors.neutral.mint};
    box-shadow: 0 0 0 2px ${Colors.blue.navy};
`;
