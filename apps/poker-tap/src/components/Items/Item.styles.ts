import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const StyledItems = styled.div`
		display: flex;
		flex-direction: column;
		gap: 15px;
		color: ${colors.neutrals.dark};
`

export const StyledItem = styled.div`
		position: relative;
		height: 64px;
		border: 2px solid ${colors.neutrals.paleLight};
		border-radius: 8px;
		background-color: ${colors.neutrals.veryPaleLight};
    box-shadow: 0 0 0 2px ${colors.neutrals.dark};
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		
		transition: filter 0.2s;
		
		&:hover {
				filter: brightness(1.1);
		}
		
		> button {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
				cursor: pointer;
		}
`

export const ItemImage = styled.div`
		width: 80px;
		min-width: 80px;
		height: 64px;
		background-color: ${colors.neutrals.pale};
`

export const ItemCentralInfos = styled.div`
		width: 100%;
		padding: 0 8px;
`

export const ItemName = styled.div`
		font-size: 18px;
		font-weight: 700;
`

export const ItemTotal = styled.div`
		width: 56px;
		min-width: 56px;
    height: 56px;
    line-height: 56px;
    font-size: 32px;
		font-weight: 700;
		text-align: center;
		margin-right: 4px;
		color: ${colors.neutrals.mediumDark};
`

export const ItemPrice = styled.div`
		
`
