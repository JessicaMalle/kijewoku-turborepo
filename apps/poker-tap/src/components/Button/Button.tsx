import type {ReactNode} from "react";
import {StyledButton} from "./Button.styles.ts";
import {useAnimation} from "@kijewoku/hooks/animation";

interface ButtonProps {
	label?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

function Button({ label, disabled, onClick, type = 'button' }: ButtonProps): ReactNode {
	const hoverAnimation = useAnimation({
		keyframes: [
			{ height: "45px", transform: "translateY(0)" },
			{ height: "44px", transform: "translateY(1px)" },
		],
		options: {
			duration: 20,
			easing: "ease-out",
			fill: "forwards",
		},
		eventType: "mouseenter",
	});

	const activeAnimation = useAnimation({
		keyframes: [
			{ height: "44px", transform: "translateY(1px)" },
			{ height: "43px", transform: "translateY(2px)" },
		],
		options: {
			duration: 20,
			easing: "ease-out",
			fill: "forwards",
		},
		eventType: "mousedown",
	});

	const mouseupResetAnimation = useAnimation({
		keyframes: [
			{ height: "43px", transform: "translateY(2px)" },
			{ height: "45px", transform: "translateY(0)" },
		],
		options: {
			duration: 20,
			easing: "ease-in",
			fill: "forwards",
		},
		eventType: "mouseup",
	});

	const mouseleaveResetAnimation = useAnimation({
		keyframes: [
			{ height: "45px", transform: "translateY(0)" },
		],
		options: {
			duration: 20,
			easing: "ease-in",
			fill: "forwards",
		},
		eventType: "mouseleave",
	});

	return (
		<StyledButton
			type={type}
			disabled={disabled}
			onClick={onClick}
			ref={element => {
				hoverAnimation.current = element;
				activeAnimation.current = element;
				mouseupResetAnimation.current = element;
				mouseleaveResetAnimation.current = element;
			}}
		>
			<span>{label}</span>
		</StyledButton>
	);
}

export default Button;
