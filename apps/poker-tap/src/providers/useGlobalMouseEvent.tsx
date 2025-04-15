import { useState, useEffect, useContext, createContext } from "react";

type MouseEventHandler = (event: MouseEvent) => void;

const GlobalMouseEventContext = createContext<{
	addMouseUpListener: (handler: MouseEventHandler) => () => void;
}>({
	addMouseUpListener: () => () => {},
});

export const GlobalMouseEventProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [mouseUpListeners] = useState<Set<MouseEventHandler>>(new Set());

	useEffect(() => {
		const handleGlobalMouseUp = (event: MouseEvent) => {
			for (const listener of mouseUpListeners) {
				listener(event);
			}
		};

		window.addEventListener("mouseup", handleGlobalMouseUp);

		return () => {
			window.removeEventListener("mouseup", handleGlobalMouseUp);
		};
	}, [mouseUpListeners]);

	const addMouseUpListener = (handler: MouseEventHandler) => {
		mouseUpListeners.add(handler);

		return () => {
			mouseUpListeners.delete(handler);
		};
	};

	return (
		<GlobalMouseEventContext.Provider value={{ addMouseUpListener }}>
			{children}
		</GlobalMouseEventContext.Provider>
	);
};

export const useGlobalMouseUp = (handler?: MouseEventHandler) => {
	const { addMouseUpListener } = useContext(GlobalMouseEventContext);

	useEffect(() => {
		if (handler) {
			return addMouseUpListener(handler);
		}
	}, [handler, addMouseUpListener]);
};
