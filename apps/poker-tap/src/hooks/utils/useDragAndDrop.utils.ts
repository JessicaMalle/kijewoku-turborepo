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

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!isDraggable) return;

		// Initialisation du drag
		setIsDragging(true);
		startPosition.current = { x: e.clientX, y: e.clientY };

		// Appel du callback
		onDragStart?.();

		// Empêcher la sélection de texte
		e.preventDefault();
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging) return;

		// Calcul de la nouvelle position
		const deltaX = e.clientX - startPosition.current.x;
		const deltaY = e.clientY - startPosition.current.y;

		setPosition({ x: deltaX, y: deltaY });

		const element = elementRef.current;
		if (element) {
			// Mise à jour de la position de l'élément (transform CSS)
			element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
		}
	};

	const handleMouseUp = () => {
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

	useEffect(() => {
		if (isDragging) {
			// Attacher les événements de mouvement et relâchement globaux
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		} else {
			// Nettoyer les écouteurs
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isDragging]);

	return { elementRef, isDragging, position, handleMouseDown };
}
