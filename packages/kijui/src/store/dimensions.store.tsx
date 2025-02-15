import type React from "react";
import { createContext, useCallback, useContext, useState } from "react";

interface Dimensions {
	width: number;
	height: number;
}

interface DimensionsContextProps {
	dimensions: Dimensions;
	setDimensions: (dimensions: Dimensions) => void;
}

const DimensionsContext = createContext<DimensionsContextProps | undefined>(
	undefined,
);

export const DimensionsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: 0,
		height: 0,
	});

	const updateDimensions = useCallback((newDimensions: Dimensions) => {
		setDimensions(newDimensions);
	}, []);

	return (
		<DimensionsContext.Provider
			value={{ dimensions, setDimensions: updateDimensions }}
		>
			{children}
		</DimensionsContext.Provider>
	);
};

export const useDimensions = (): DimensionsContextProps => {
	const context = useContext(DimensionsContext);
	if (!context) {
		throw new Error("useDimensions must be used within a DimensionsProvider");
	}
	return context;
};
