import styled from "styled-components";

export const StyledItems = styled.div`
		display: flex;
		flex-direction: column;
		gap: 15px
`

export const StyledItem = styled.div`
		position: relative;
		border: 2px solid #000;
		border-radius: 8px;
		
		> button {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100px;
				opacity: 0;
				cursor: pointer;
		}
`

export const ItemName = styled.div``

export const ItemTotal = styled.div``

export const ItemPrice = styled.div``
