import styled from "styled-components";

export const StyledItems = styled.div`
		display: flex;
		flex-direction: column;
		gap: 15px
`

export const StyledItem = styled.div`
		position: relative;
		height: 64px;
		border: 2px solid #8c78a5;
		border-radius: 36px;
		background-color: #b0a7b8;
		
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
		background-color: #8c78a5;
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
		border-radius: 100%;
    font-size: 32px;
		font-weight: 700;
		text-align: center;
		margin-right: 4px;
		background-color: #ffffff;
`

export const ItemPrice = styled.div`
		
`
