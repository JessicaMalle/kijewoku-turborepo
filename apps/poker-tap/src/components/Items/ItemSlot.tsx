import type { ReactNode } from "react";
import type { ItemType } from "../../types/gameTypes.ts";
import { useItems } from "../../hooks/states/useItems.ts";
import { ItemSlotContainer, ItemSlotCount } from "./ItemSlot.styles.ts";
import Icon from "../DataDisplay/Icon.tsx";

function ItemSlot({
	uid,
	onClick,
}: { uid: ItemType; onClick: () => void }): ReactNode {
	const { item } = useItems(uid);

	return item ? (
		<ItemSlotContainer type="button" onClick={onClick}>
			<Icon size={42} />
			<ItemSlotCount>{item.count}</ItemSlotCount>
		</ItemSlotContainer>
	) : null;
}

export default ItemSlot;
