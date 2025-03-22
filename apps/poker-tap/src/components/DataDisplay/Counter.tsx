import type {ReactNode} from "react";
import useCountToUtils from "../../hooks/utils/useCountTo.utils.ts";
import {CounterIcon, StyledCounter} from "./Counter.styles.ts";

interface CounterProps {
	value: { from: number, to: number }
	icon?: ReactNode;
	speed?: number;
	delay?: number;
	digits?: number;
}

function Counter({ value, icon, speed = 1000, delay = 100, digits = 0 }: CounterProps): ReactNode {
	const currentValue = useCountToUtils({ from: value.from, to: value.to, speed, delay, digits });

	return (
		<StyledCounter>
			<>
				<CounterIcon>
					<div>{icon}</div>
				</CounterIcon>
				<div>{currentValue}</div>
			</>
		</StyledCounter>
	)
}

export default Counter;
