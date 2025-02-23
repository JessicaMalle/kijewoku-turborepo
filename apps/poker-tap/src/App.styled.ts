import styled from "styled-components";

const sidebarWidth = "380px";
const mainContentWidth = "1fr";
const rightSidebarWidth = "320px";
const headerHeight = "40px";
const pokerInfoHeight = "60px";
const handHeight = "240px";
const backgroundColor = "#f0f0f0";

export const Main = styled.main`
    display: grid;
    grid-template-columns: ${sidebarWidth} ${mainContentWidth} ${rightSidebarWidth};
    height: 100vh;
    max-height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Section = styled.section`
    height: 100%;
    text-align: center;
`;

export const PokerPadSection = styled(Section)`
    display: grid;
    grid-template-rows: ${headerHeight} ${pokerInfoHeight} 1fr ${handHeight};
    background-color: ${backgroundColor};
`;

export const PokerPadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100vh - ${headerHeight} - ${pokerInfoHeight} - ${handHeight});
    overflow-y: auto;
`;

export const PokerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const BigChipSection = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
    background-color: steelblue;
`;

export const RightSection = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-height: 100vh;
`;

export const ShopSection = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
