import { useAnimation } from "@kijewoku/hooks/animation";

interface UseDeckAnimationsProps {
	canDrawCard: boolean;
}

export function useDeckAnimations({ canDrawCard }: UseDeckAnimationsProps) {
	const mouseDownAnimationRef = useAnimation({
		keyframes: [
			{ transform: "scale(1) rotate(0deg)" },
			{ transform: "scale(0.95) rotate(-3deg)" },
		],
		options: {
			duration: 200,
			easing: "ease-out",
			fill: "forwards",
		},
		eventType: "mousedown",
	});

	const mouseEnterAnimationRef = useAnimation({
		keyframes: [
			{ transform: "scale(1) rotate(0deg)" },
			{ transform: "scale(1.05) rotate(3deg)" },
			{ transform: "scale(1) rotate(0deg)" },
		],
		options: {
			duration: 500,
			easing: "ease-in-out",
		},
		eventType: "mouseenter",
	});

	const mouseLeaveAnimationRef = useAnimation({
		keyframes: [
			{ transform: "scale(1) rotate(0deg)" },
			{ transform: "scale(0.95) rotate(-2deg)" },
			{ transform: "scale(1) rotate(0deg)" },
		],
		options: {
			duration: 500,
			easing: "ease-in-out",
		},
		eventType: "mouseleave",
	});

	const mouseUpAnimations = [
		[
			{ transform: "scale(1) rotate(0deg)" },
			{ transform: "scale(1.05) rotate(2deg)" },
			{ transform: "scale(1) rotate(0deg)" },
		],
		[
			{ transform: "translateX(0) rotate(0deg)" },
			{ transform: "translateX(-10px) rotate(-3deg)" },
			{ transform: "translateX(10px) rotate(3deg)" },
			{ transform: "translateX(-10px) rotate(-3deg)" },
			{ transform: "translateX(10px) rotate(3deg)" },
			{ transform: "translateX(-5px) rotate(-1deg)" },
			{ transform: "translateX(0) rotate(0deg)" },
		],
	];

	const mouseUpAnimationRef = useAnimation({
		keyframes: canDrawCard ? mouseUpAnimations[0] : mouseUpAnimations[1],
		options: {
			duration: 250,
			easing: "ease-out",
			fill: "forwards",
		},
		eventType: "mouseup",
	});

	const combineRefs = (element: HTMLElement | null) => {
		mouseDownAnimationRef.current = element;
		mouseUpAnimationRef.current = element;
		mouseEnterAnimationRef.current = element;
		mouseLeaveAnimationRef.current = element;
	};

	return {
		combineRefs,
	};
}
