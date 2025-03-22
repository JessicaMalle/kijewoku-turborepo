import styled from "styled-components";

export const Main = styled.main`
		display: grid;
		grid-template-rows: 60px 1fr fit-content(100%);
		height: 100vh;
		max-height: 100vh;
		background-color: #5e5b8c;
		color: #10121c
`;

export const GameLayout = styled.div`
		display: grid;
		grid-template-columns: 350px minmax(auto, 1fr) 350px;
		grid-template-rows: 120px repeat(7, 1fr) 120px;
		gap: 15px;
		height: calc(100% - 15px);
		padding: 0 15px;
		overflow: hidden;

		#chips-counter {
				grid-column: 1/2;
				grid-row: 1/2;
		}

		#big-chip {
				grid-column: 1/2;
				grid-row: 2/10;
        position: relative;
				z-index: 2;
		}

		#poker-pads {
				position: relative;
        grid-column: 2/3;
        grid-row: 1/9;
        overflow-y: scroll;
		}

		#items {
				grid-column: 3/4;
				grid-row: 1/7;
        position: relative;
        z-index: 2;
		}

		#deck {
				grid-column: 3/4;
				grid-row: 7/10;
        position: relative;
        z-index: 2;
		}
`;

export const Header = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		padding: 0 15px;

		> h1 {
				margin: 0;
				font-size: 1.2rem;
		}
`;
