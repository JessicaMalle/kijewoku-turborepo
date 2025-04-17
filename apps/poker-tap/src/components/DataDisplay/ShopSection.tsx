import { useState } from "react";
import Cursors from "../Items/Cursors.tsx";
import AddCroupiersButton from "../Items/AddCroupiersButton.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import { StyledShopSection } from "./StyledShopSection.styles.ts";
import { ItemSelector, SelectorButton } from "./ShopSection.styles.ts";
import ItemCard from "../Items/ItemCard.tsx";

type ItemsUid = "CURSOR" | "CROUPIER";

function ShopSection(): JSX.Element {
	const { cursors, croupiers } = useAppContext();
	const [activeItems, setActiveItems] = useState<ItemsUid>("CURSOR");

	const handleItemSelect = (item: ItemsUid): void => setActiveItems(item);

	const renderActiveItem = () => {
		switch (activeItems) {
			case "CURSOR":
				return (
					<ItemCard
						title="Cursor"
						count={cursors}
						description="The cursor automatically clicks on the poker pad once per second."
						actionComponent={<Cursors />}
					/>
				);
			case "CROUPIER":
				return (
					<ItemCard
						title="Croupier"
						count={croupiers.length}
						description="The croupier automatically deals the cards, increasing your production."
						actionComponent={<AddCroupiersButton />}
					/>
				);
		}
	};

	return (
		<StyledShopSection>
			<h2>Poker Shop</h2>

			{renderActiveItem()}

			<ItemSelector>
				{(["CURSOR", "CROUPIER"] as ItemsUid[]).map((item) => (
					<SelectorButton
						key={item}
						active={activeItems === item}
						onClick={() => handleItemSelect(item)}
					>
						{item}
					</SelectorButton>
				))}
			</ItemSelector>
		</StyledShopSection>
	);
}

export default ShopSection;
