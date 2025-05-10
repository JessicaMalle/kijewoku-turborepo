import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

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
	  border: 3px solid ${Colors.dark.mediumPurple};
	  border-radius: 6px;
	  background-color: ${Colors.neutral.slate};
	  overflow: hidden;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DialogHeader = styled.div`
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px 15px;
	  background-color: ${Colors.slateGreen.sage};
	  color: ${Colors.neutral.white};
	  border-bottom: 2px solid ${Colors.dark.mediumPurple};
`;

export const DialogTitle = styled.h3`
	  margin: 0;
	  font-size: 1.2rem;
	  font-weight: 700;
	  color: ${Colors.neutral.white};
	  text-shadow:
		    -1px -1px 0 ${Colors.dark.nightPurple},
		    1px -1px 0 ${Colors.dark.nightPurple},
		    -1px 1px 0 ${Colors.dark.nightPurple},
		    1px 1px 0 ${Colors.dark.nightPurple};
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
	  color: ${Colors.neutral.white};
	  background-color: ${Colors.red.burgundy};
	  border: 2px solid ${Colors.dark.mediumPurple};
	  border-radius: 50%;

	  &:hover {
	    	background-color: ${Colors.red.crimson};
	  }

	  &:active {
	    	transform: scale(0.95);
	  }
`;
