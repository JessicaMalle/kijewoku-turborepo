import type {ReactNode} from "react";
import useCountToUtils from "../../hooks/utils/useCountTo.utils.ts";
import {CounterIcon, CounterValueWrapper, StyledCounter} from "./Counter.styles.ts";

interface CounterProps {
	label: string;
	value: { from: number, to: number }
	icon?: ReactNode;
	speed?: number;
	delay?: number;
	digits?: number;
}

function Counter({ label, value, icon, speed = 1000, delay = 100, digits = 0 }: CounterProps): ReactNode {
	const currentValue = useCountToUtils({ from: value.from, to: value.to, speed, delay, digits });

	return (
		<StyledCounter>
			<>
				<CounterIcon>
					<div>{icon}</div>
				</CounterIcon>
				<CounterValueWrapper>{currentValue} {label}</CounterValueWrapper>
			</>
		</StyledCounter>
	)
}

export default Counter;
