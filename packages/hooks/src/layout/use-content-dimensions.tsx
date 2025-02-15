import type { RefObject } from "react";
import { useEffect } from "react";

interface UseContentDimensionsParams {
	screenContainerRef: RefObject<HTMLDivElement>;
	contentRef: RefObject<HTMLDivElement>;
	isPortrait?: boolean;
}

function useContentDimensions({
	screenContainerRef,
	contentRef,
	isPortrait,
}: UseContentDimensionsParams) {
	useEffect(() => {
		const adjustDimensions = () => {
			const screenContainer = screenContainerRef.current;
			const content = contentRef.current;

			if (screenContainer && content) {
				if (isPortrait !== undefined) {
					if (isPortrait) {
						content.style.width = `${screenContainer.clientHeight}px`;
						content.style.height = `${screenContainer.clientWidth}px`;
					} else {
						content.style.width = `${screenContainer.clientWidth}px`;
						content.style.height = `${screenContainer.clientHeight}px`;
					}
				} else {
					content.style.width = `${screenContainer.clientWidth}px`;
					content.style.height = `${screenContainer.clientHeight}px`;
				}
			}
		};

		adjustDimensions();
		window.addEventListener("resize", adjustDimensions);
		return () => window.removeEventListener("resize", adjustDimensions);
	}, [screenContainerRef, contentRef, isPortrait]);
}

export default useContentDimensions;
