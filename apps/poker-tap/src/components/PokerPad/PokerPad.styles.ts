import styled from "styled-components";

export const StyledPokerPad = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: calc((clamp(60px, 12vw, 100px) * 5) + 20px + (40px));
    height: 154px;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid #5ab552;

    background-color: #26854c;
    background-image:
            radial-gradient(circle at 5% 20%, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 80% 5%, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 70% 50%, rgba(0, 0, 0, 0.02) 1px, transparent 1px);

    background-blend-mode: multiply;

    background-repeat: repeat;

    background-size: 6px 6px;

`;
