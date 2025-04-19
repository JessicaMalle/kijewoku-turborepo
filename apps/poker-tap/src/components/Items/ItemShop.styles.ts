import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ItemShopContainer = styled.div`
		display: grid;
		gap: 13px;
`;

export const ItemShopDescription = styled.div`
		display: grid;
		gap: 13px;
		
		> div {
      display: flex;
			justify-content: space-between;
			align-items: center;
	}
`;

export const ItemShopItemName = styled.h3`
		margin: 0;
		font-size: 1.6rem;
		font-weight: 700;
		text-shadow: 0 2px ${colors.neutrals.medium};
`;

export const ItemShopItemCount = styled.div`
    width: 52px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    font-weight: 700;
    font-size: 26px;
    border-radius: 50%;
    border: 4px solid ${colors.neutrals.paleLight};
    box-shadow: 0 0 0 4px ${colors.neutrals.medium};
    background-color: ${colors.neutrals.white};
    color: ${colors.neutrals.dark};
`;

export const ItemIllustration = styled.div`
    display: flex;
		justify-content: center !important;
		width: 100%;
		margin: 10px 0 30px 0;
`;

export const ItemSlotsContainer = styled.div`
		display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 13px;
`;
