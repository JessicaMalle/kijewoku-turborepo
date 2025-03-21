import type {ReactNode} from "react";
import {StyledButton} from "./Button.styles.ts";

interface ButtonProps {
	label?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

function Button({ label, disabled, onClick, type = 'button' }: ButtonProps): ReactNode {
	return (
		<StyledButton type={type} disabled={disabled} onClick={onClick}>
			<span>{label}</span>
		</StyledButton>
	);
}

export default Button;
