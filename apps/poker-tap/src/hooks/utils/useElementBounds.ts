export const useElementBounds = <T extends HTMLElement>({
	elementRef,
	x,
	y,
}: {
	elementRef: React.RefObject<T | null>;
	x: number;
	y: number;
}): boolean => {
	if (!elementRef.current) return false;

	const rect = elementRef.current.getBoundingClientRect();
	return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};
