export function updateArrayItemByIndex<T>({
	array,
	index,
	updateFn,
}: {
	array: T[];
	index: number;
	updateFn: (item: T) => T;
}): T[] {
	return [
		...array.slice(0, index),
		updateFn(array[index]),
		...array.slice(index + 1),
	];
}
