import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {GameProvider} from "./context/GameProvider.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<GameProvider>
				<App />
			</GameProvider>
		</StrictMode>,
	);
}
