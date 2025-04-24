import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ItemShopContainer = styled.div`
		display: grid;
		gap: 13px;
		padding: 15px;
		border-radius: 10px;
		background-color: ${colors.blues.darkBlue};
    border: 2px solid ${colors.blues.navyBlue};
`;

export const ItemShopDescription = styled.div`
		display: grid;
		gap: 13px;
		padding: 10px;
    background-color: ${colors.neutrals.veryPaleLight};
    border: 2px solid ${colors.neutrals.white};
		border-radius: 6px;
`;

export const ItemShopItemName = styled.h3`
		margin: 0;
		font-size: 1.6rem;
		font-weight: 700;
		color: ${colors.neutrals.mediumDark};
		text-shadow: 0 2px ${colors.neutrals.paleLight};
		text-align: center;
`;

export const ItemNameAndInfoToggler = styled.div`
	position: relative;
`;

export const ItemInfoToggler = styled.button`
    all: unset;
		position: absolute;
		top: 0;
		right: 0;
		background-color: white;
		color: black;
		width: 20px;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		font-weight: 700;
		border-radius: 50%;
		text-align: center;
    cursor: pointer;
`;

export const ItemPriceAndCount = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const ItemShopItemCount = styled.div`
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    border-radius: 50%;
    border: 3px solid ${colors.neutrals.paleLight};
    box-shadow: 0 0 0 2px ${colors.neutrals.medium};
    background-color: ${colors.neutrals.white};
    color: ${colors.neutrals.dark};
`;

export const ItemIllustration = styled.div`
    display: flex;
		justify-content: center !important;
		width: 100%;
    padding: 10px;
`;

export const ItemSlotsContainer = styled.div`
		display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 13px;
`;
