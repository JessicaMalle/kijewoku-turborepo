import {StyledCardPlaceholder} from "./CardPlaceholder.styles.ts";
import type {ReactNode, MouseEvent} from "react";

type CardPlaceholderProps = {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

function CardPlaceholder({onClick}: CardPlaceholderProps): ReactNode {
    return onClick ? <StyledCardPlaceholder onClick={onClick} /> : <StyledCardPlaceholder />;
}

export default CardPlaceholder;
