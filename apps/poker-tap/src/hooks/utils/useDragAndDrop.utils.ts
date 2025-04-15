import { useState, useRef, useEffect } from "react";

export type Position = { x: number; y: number };

export function useDragAndDrop({
	isDraggable = false,
	onDragStart,
	onDragEnd,
}: {
	isDraggable: boolean;
	onDragStart?: () => void;
	onDragEnd?: (position: Position) => void;
}) {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const startPosition = useRef<Position>({ x: 0, y: 0 });
	const elementRef = useRef<HTMLDivElement | null>(null);

	// Gestionnaire commun pour démarrer le déplacement
	const startDragging = (clientX: number, clientY: number) => {
		if (!isDraggable) return;

		setIsDragging(true);
		startPosition.current = { x: clientX, y: clientY };

		// Appel du callback
		onDragStart?.();
	};

	// Gestionnaire commun pour suivre le déplacement
	const doDragging = (clientX: number, clientY: number) => {
		if (!isDragging) return;

		const deltaX = clientX - startPosition.current.x;
		const deltaY = clientY - startPosition.current.y;

		setPosition({ x: deltaX, y: deltaY });

		const element = elementRef.current;
		if (element) {
			element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
		}
	};

	// Gestionnaire commun pour terminer le déplacement
	const stopDragging = () => {
		if (!isDragging) return;

		setIsDragging(false);

		// Appel du callback avec la position finale
		onDragEnd?.(position);

		// Réinitialiser la transformation si nécessaire
		const element = elementRef.current;
		if (element) {
			element.style.transform = "";
		}
	};

	// Événements de souris
	const handleMouseDown = (e: React.MouseEvent) => {
		startDragging(e.clientX, e.clientY);
		e.preventDefault(); // Empêcher la sélection de texte
	};

	const handleMouseMove = (e: MouseEvent) => {
		doDragging(e.clientX, e.clientY);
	};

	const handleMouseUp = () => {
		stopDragging();
	};

	// Événements tactiles
	const handleTouchStart = (e: React.TouchEvent) => {
		if (e.touches.length === 1) {
			const touch = e.touches[0];
			startDragging(touch.clientX, touch.clientY);
			e.preventDefault(); // Empêcher le défilement
		}
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (e.touches.length === 1) {
			const touch = e.touches[0];
			doDragging(touch.clientX, touch.clientY);
			e.preventDefault(); // Empêcher le défilement
		}
	};

	const handleTouchEnd = () => {
		stopDragging();
	};

	useEffect(() => {
		if (isDragging) {
			// Attacher les événements globaux
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
			document.addEventListener("touchmove", handleTouchMove, {
				passive: false,
			});
			document.addEventListener("touchend", handleTouchEnd);
			document.addEventListener("touchcancel", handleTouchEnd);
		} else {
			// Nettoyer les écouteurs
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
			document.removeEventListener("touchcancel", handleTouchEnd);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
			document.removeEventListener("touchcancel", handleTouchEnd);
		};
	}, [isDragging]);

	return {
		elementRef,
		isDragging,
		position,
		handleMouseDown,
		handleTouchStart,
	};
}
