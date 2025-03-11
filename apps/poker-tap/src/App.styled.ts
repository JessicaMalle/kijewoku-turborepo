import styled from "styled-components";

export const Main = 	styled.main`
	display: grid;
	grid-template-rows: 40px 1fr fit-content(100%);
	height: 100vh;
	max-height: 100vh;
	background-color: #5e5b8c;
`;

export const GameLayout = styled.div`
    display: grid;
	grid-template-columns: 280px 1fr 240px;
	grid-template-rows: 120px 1fr 1fr 1fr 1fr 120px;
	gap: 15px;
	height: 100%;
	padding: 0 15px;
	overflow: hidden;

    #chips-counter {
		grid-column: 1/2;
		grid-row: 1/2;
    }

    #big-chip {
		grid-column: 1/2;
        grid-row: 2/7;
    }

    #poker-pads {
		grid-column: 2/3;
		grid-row: 1/7;
		overflow: scroll;
    }

    #items {
        grid-column: 3/4;
		grid-row: 1/5;
    }

    #deck {
        grid-column: 3/4;
		grid-row: 5/7;
    }
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0 15px;
	
	> h1 {
		margin: 0;
		font-size: 1.2rem;
	}
`

export const HandLayout = styled.div`
`
