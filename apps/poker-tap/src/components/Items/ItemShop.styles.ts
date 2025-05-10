import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const ItemShopContainer = styled.div`
		display: grid;
		gap: 13px;
		padding: 15px;
		border-radius: 10px;
		background-color: ${Colors.blue.navy};
    border: 2px solid ${Colors.blue.cobalt};
`;

export const ItemShopDescription = styled.div`
		display: grid;
		grid-template-rows: 40px 1fr auto;
		gap: 10px;
		padding: 10px;
    position: relative;
    background-color: ${Colors.neutral.mint};
    border: 2px solid ${Colors.neutral.white};
		border-radius: 6px;
		aspect-ratio: 1/1;
`;

export const ItemShopItemName = styled.h3`
		margin: 0;
		font-size: 1.6rem;
		font-weight: 700;
		color: ${Colors.dark.mediumPurple};
		text-shadow: 0 2px ${Colors.neutral.mint};
		text-align: center;
`;

export const ItemNameAndInfoToggle = styled.div`
    position: relative;
`;

export const ItemInfoToggle = styled.button`
    all: unset;
    position: absolute;
		right: 0;
		top: 0;
		background-color: ${Colors.neutral.white};
		color: ${Colors.neutral.mint};
		height: calc(100% - 4px);
		aspect-ratio: 1/1;
		font-size: 24px;
		font-weight: 700;
		border: 2px solid ${Colors.neutral.mint};
		border-radius: 50%;
		text-align: center;
    cursor: pointer;
`;

export const ItemPriceAndCount = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-height: fit-content;
`;

export const ItemShopItemCount = styled.div`
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    border-radius: 50%;
    border: 3px solid ${Colors.neutral.mint};
    box-shadow: 0 0 0 2px ${Colors.neutral.slate};
    background-color: ${Colors.neutral.white};
    color: ${Colors.dark.nightPurple};
`;

export const ItemIllustration = styled.div`
    display: flex;
		justify-content: center;
		align-items: center;
		width: calc(100% - 20px);
    padding: 10px;
`;

export const ItemSlotsContainer = styled.div`
		display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 13px;
`;
