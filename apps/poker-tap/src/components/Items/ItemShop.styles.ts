import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const ItemShopContainer = styled.div`
		display: grid;
		gap: 15px;
		padding: 15px;
		border-radius: 10px;
		background-color: ${Colors.blue.navy};
    border: 2px solid ${Colors.blue.cobalt};
`;

export const ItemShopDescription = styled.div`
		display: grid;
		grid-template-rows: 40px 1fr auto;
		gap: 15px;
		padding: 10px;
    position: relative;
    border: 3px solid ${Colors.yellow.yellow};
    box-shadow: 0 0 0 2px ${Colors.yellow.gold};
    background-color: ${Colors.yellow.canary};
		border-radius: 6px;
		aspect-ratio: 1/1;
`;

export const ItemShopItemName = styled.h3`
		margin: 0;
		font-size: 28px;
		font-weight: 700;
		color: ${Colors.dark.deepPurple};
`;

export const ItemNameAndInfoToggle = styled.div`
    position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const ItemInfoToggle = styled.button`
    all: unset;
		background-color: ${Colors.blue.azure};
		color: ${Colors.neutral.white};
		height: 30px;
		aspect-ratio: 1/1;
		font-size: 20px;
		font-weight: 700;
		border: 2px solid ${Colors.blue.navy};
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
    font-weight: 700;
    font-size: 51px;
		line-height: 51px;
    color: ${Colors.dark.deepPurple};
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
