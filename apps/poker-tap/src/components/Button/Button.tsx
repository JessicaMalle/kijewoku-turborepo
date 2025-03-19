import type {ReactNode} from "react";

interface ButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

function Button({ children, disabled, onClick, type = 'button' }: ButtonProps): ReactNode {
	return (
		<button type={type} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
