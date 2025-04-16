import { createContext } from "react";

export type StartCallback = () => void;
export type UpdateCallback = (deltaTime: number) => void;

interface GameLoopContextType {
	play: () => void;
	pause: () => void;
	start: (callback: StartCallback) => void;
	update: (callback: UpdateCallback, id: string) => void;
	removeUpdate: (id: string) => void;
	isRunning: boolean;
}

export const GameLoopContext = createContext<GameLoopContextType | undefined>(
	undefined,
);
