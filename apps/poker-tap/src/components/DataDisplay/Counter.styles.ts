import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const StyledCounter = styled.div`
		position: relative;
		text-align: right;
		height: 42px;
`

export const CounterIcon = styled.div`
    > div {
	    	position: absolute;
		    left: -5px;
		    top: -5px;
        > div {
	          border: 3px solid ${colors.neutrals.dark};
		        border-radius: 50%;
	          cursor: default;
				}
		}
`

export const CounterValueWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
		width: calc(100% - 20px);
		padding: 0 10px;
    font-size: 20px;
    font-weight: 700;
		border-radius: 4px;
    background-color: ${colors.neutrals.dark}75;
		border-bottom: 3px solid ${colors.neutrals.dark}50;
`
