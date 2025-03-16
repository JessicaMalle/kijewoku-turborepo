import styled from "styled-components";

export const StyledCardPlaceholder = styled.div`
    container-name: card-placeholder;
    container-type: inline-size;
    position: relative;
    width: clamp(60px, 12vw, 100px);
    min-width: 60px;
    aspect-ratio: 2 / 3;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px dashed #006554;
    background-color: #1e404425;
		
		transition: background-color 0.2s;
		
		&:hover {
    	background-color: #1e404450;
		}

    user-select: none;
    overflow: hidden;
    cursor: default;
`;
