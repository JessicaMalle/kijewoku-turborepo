import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const StyledCardBack = styled.div`
    width: 120px;
    min-width: 100px;
    aspect-ratio: 2 / 3;
    background-color: ${colors.neutrals.white};
    background-image:  linear-gradient(135deg, ${colors.reds.cherryRed} 25%, transparent 25%),
                       linear-gradient(225deg, ${colors.reds.cherryRed} 25%, transparent 25%),
    									 linear-gradient(45deg, ${colors.reds.cherryRed} 25%, transparent 25%),
    									 linear-gradient(315deg, ${colors.reds.cherryRed} 25%, ${colors.neutrals.white} 25%);
    background-position:  20px 0, 20px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
    border-radius: 8px;
		border: 3px solid ${colors.reds.red};
		box-shadow: 0 0 0 4px ${colors.neutrals.dark};
		cursor: pointer;
`;

export const Rest = styled.div`
    color: white;
    font-size: 2rem;
    background-color: black;
    padding: 10px;
		
		display: none;
`;


