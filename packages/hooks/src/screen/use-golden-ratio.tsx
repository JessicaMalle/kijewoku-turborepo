import { useMemo } from "react";

type FibonacciTerm = 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89;
const GOLDEN_RATIO = 1.618;

const useGoldenRatio = ({
	width,
	height,
}: { width: number; height: number }) => {
	const adjustedSize = useMemo(() => {
		const isPortrait = width < height;
		const landscapeWidth = isPortrait ? height : width;
		const landscapeHeight = isPortrait ? width : height;

		const idealHeight = landscapeWidth / GOLDEN_RATIO;
		const idealWidth = landscapeHeight * GOLDEN_RATIO;

		return idealHeight <= landscapeHeight
			? { size: idealHeight }
			: { size: idealWidth };
	}, [width, height]);

	const getFibonacciSequence = (): number[] => {
		const sequence: number[] = [1, 1];
		for (let i = 2; i < 10; i++) {
			const prev1 = sequence[i - 1] ?? 0;
			const prev2 = sequence[i - 2] ?? 0;
			sequence.push(prev1 + prev2);
		}
		return sequence;
	};

	const f7i = useMemo(() => {
		const { size } = adjustedSize;
		const sequence = getFibonacciSequence();
		const lastValue = sequence[sequence.length - 1] ?? 1;

		return sequence.reduce<{ [key: number]: number }>((acc, value) => {
			acc[value] = (value / lastValue) * size;
			return acc;
		}, {});
	}, [adjustedSize]);

	const get = (term: FibonacciTerm) => f7i[term] || 0;

	return { f7i, get, adjustedSize };
};

export default useGoldenRatio;
