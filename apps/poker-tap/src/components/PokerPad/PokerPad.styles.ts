import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const StyledPokerPad = styled.div<{ $hovered: boolean }>`
    display: flex;
		flex-direction: column;
		gap: 10px;
		
		padding: 10px;
		margin: 0 auto 30px auto;
    border-radius: 12px;
    border: 2px solid ${Colors.green.grass};

		box-shadow: 0 4px 0 0 ${Colors.green.emerald};

    background-color: ${Colors.green.jade};
    background-image:
            radial-gradient(circle at 5% 20%, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 80% 5%, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 70% 50%, rgba(0, 0, 0, 0.02) 1px, transparent 1px);

    background-blend-mode: multiply;

    background-repeat: repeat;

    background-size: 6px 6px;

    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

    ${({ $hovered }) =>
			$hovered &&
			`
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2), 0 6px 0 0 ${Colors.green.jade};
        border-color: ${Colors.green.jade};
        background-color: ${Colors.green.emerald};
    `}
`;

export const StyledPlayedPokerPad = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: calc((clamp(40px, 8vw, 70px) * 5) + 10px);
    max-height: 100px;

    padding: 5px;
    margin: 0 auto 15px auto;
    border-radius: 8px;
    border: 1px solid ${Colors.green.jade};

    box-shadow: 0 2px 0 0 ${Colors.green.emerald};

    background-color: ${Colors.green.emerald};
    background-image:
            radial-gradient(circle at 5% 20%, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            radial-gradient(circle at 80% 5%, rgba(0, 0, 0, 0.01) 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            radial-gradient(circle at 70% 50%, rgba(0, 0, 0, 0.01) 1px, transparent 1px);

    background-blend-mode: multiply;
    background-repeat: repeat;
    background-size: 4px 4px;
`;

export const PokerPadHead = styled.div`
		display: flex;
		justify-content: space-between;
`;

export const StyledPokerPadInfos = styled.div`
    text-transform: uppercase;
    font-weight: 700;
		text-align: center;
		color: ${Colors.neutral.white};
`;

export const PokerPadCardsSection = styled.section`
		padding: 12px 14px;
		background-color: ${Colors.dark.nightPurple}50;
		border-radius: 12px;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
		border-top: 4px solid ${Colors.dark.nightPurple}25;
		> div:first-child {
	    display: flex;
	    align-items: center;
	    gap: 10px;
	    max-width: calc((clamp(60px, 12vw, 100px) * 5) + 20px + (40px));
	    max-height: 154px;
		}
		> div:last-child {
				margin-top: 12px;
		}
`;
