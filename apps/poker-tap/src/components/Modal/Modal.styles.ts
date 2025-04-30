import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const StyledDialog = styled.dialog<{ $width?: string }>`
	  border: none;
	  background: transparent;
		margin: 0;
	  padding: 0;
	  position: fixed;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  width: ${({ $width }) => $width || "80%"};
	  max-width: 500px;
	  max-height: 80vh;
	  z-index: 1000;
	  border-radius: 8px;
	  overflow: hidden;
	
	  &:not([open]) {
	    	display: none;
	  }
	
	  &::backdrop {
	    	background-color: rgba(46, 34, 47, 0.7);
	  }
`;

export const DialogContent = styled.div`
	  display: flex;
	  flex-direction: column;
	  border: 3px solid ${colors.neutral1000};
	  border-radius: 6px;
	  background-color: ${colors.neutral800};
	  overflow: hidden;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DialogHeader = styled.div`
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px 15px;
	  background-color: ${colors.stealBlue500};
	  color: ${colors.neutral100};
	  border-bottom: 2px solid ${colors.neutral1000};
`;

export const DialogTitle = styled.h3`
	  margin: 0;
	  font-size: 1.2rem;
	  font-weight: 700;
	  color: ${colors.neutral100};
	  text-shadow:
		    -1px -1px 0 ${colors.neutral1600},
		    1px -1px 0 ${colors.neutral1600},
		    -1px 1px 0 ${colors.neutral1600},
		    1px 1px 0 ${colors.neutral1600};
`;

export const CloseButton = styled.button`
	  all: unset;
	  cursor: pointer;
	  width: 24px;
	  height: 24px;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 1.5rem;
	  font-weight: bold;
	  color: ${colors.neutral100};
	  background-color: ${colors.red1200};
	  border: 2px solid ${colors.neutral1000};
	  border-radius: 50%;
	
	  &:hover {
	    	background-color: ${colors.red200};
	  }
	
	  &:active {
	    	transform: scale(0.95);
	  }
`;
