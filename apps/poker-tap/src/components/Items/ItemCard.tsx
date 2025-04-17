import type { ReactNode } from "react";
import {
	IllustrationItemCard,
	StyledItemCard,
	TitleItemCard,
} from "./ItemCard.styles.ts";
import { DescriptionItemCard } from "../DataDisplay/ShopSection.styles.ts";

interface GenericItemCardProps {
	title: string;
	count: number;
	description: string;
	actionComponent: ReactNode;
}

function ItemCard({
	title,
	count,
	description,
	actionComponent,
}: GenericItemCardProps): ReactNode {
	return (
		<StyledItemCard>
			<TitleItemCard>
				<span>{title}</span>
				<span>({count})</span>
			</TitleItemCard>
			<IllustrationItemCard />
			<DescriptionItemCard>{description}</DescriptionItemCard>
			{actionComponent}
		</StyledItemCard>
	);
}
export default ItemCard;
