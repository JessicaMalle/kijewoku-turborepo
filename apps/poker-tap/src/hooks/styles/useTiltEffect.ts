import { useEffect, useRef, useState } from 'react';

type TiltOptions = {
	max?: number; // ------------- Maximum tilt angle in degrees
	perspective?: number; // ----- CSS perspective value
	scale?: number; // ----------- Scale on hover
	speed?: number; // ----------- Transition speed
	easing?: string; // ---------- CSS easing function
	glareMaxOpacity?: number; // - Maximum opacity of the glare
	glareColor?: string; // ------ Color of the glare
	gyroscope?: boolean; // ------ Gyroscope support for mobile
	reset?: boolean; // ---------- Auto reset on mouse leave
	reverse?: boolean; // -------- Reverse tilt direction
	disableAxis?: string; // ----- Disable an axis (x or y)
	glarePosition?: string; // --- Position of the glare effect
	glareSize?: number; // ------- Size of the glare effect (%)
};

/**
 * @example Usage
 *
 * // Basic usage
 * const { elementRef: tiltRef } = useTiltEffect({
 *   max: 20,
 *   perspective: 800,
 *   scale: 1.03,
 *   speed: 400,
 *   glareMaxOpacity: 0.4,
 *   glareColor: "rgba(255, 255, 255, 0.7)",
 *   glareSize: 180, // Size of the glare effect in %
 *   gyroscope: true, // (beta)
 * });
 *
 * // Combining with another ref
 * const setRefs = (element: HTMLDivElement) => {
 *   if (dragRef) {
 *     dragRef.current = element;
 *   }
 *   if (tiltRef) {
 *     tiltRef.current = element;
 *   }
 * };
 *
 * // Usage in JSX
 * <div ref={setRefs}>Tilt Element</div>
 */
export const useTiltEffect = (options: TiltOptions = {}) => {
	const {
		max = 15,
		perspective = 1000,
		scale = 1.05,
		speed = 300,
		easing = "cubic-bezier(.03,.98,.52,.99)",
		glareMaxOpacity = 0.5,
		glareColor = "rgba(255, 255, 255, 0.8)",
		gyroscope = false,
		glareSize = 200,
	} = options;

	const elementRef = useRef<HTMLDivElement | null>(null);
	const glareRef = useRef<HTMLDivElement | null>(null);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		if (!glareRef.current) {
			const glareElement = document.createElement('div');
			glareElement.className = 'glare-container';
			glareElement.style.position = 'absolute';
			glareElement.style.top = '0';
			glareElement.style.left = '0';
			glareElement.style.width = '100%';
			glareElement.style.height = '100%';
			glareElement.style.overflow = 'hidden';
			glareElement.style.borderRadius = 'inherit';
			glareElement.style.pointerEvents = 'none';

			const glareInner = document.createElement('div');
			glareInner.className = 'glare';
			glareInner.style.position = 'absolute';
			glareInner.style.top = '50%';
			glareInner.style.left = '50%';
			glareInner.style.transformOrigin = '0% 0%';
			glareInner.style.pointerEvents = 'none';
			glareInner.style.width = `${glareSize}%`;
			glareInner.style.height = `${glareSize}%`;
			glareInner.style.background = `linear-gradient(0deg, ${glareColor} 0%, transparent 80%)`;
			glareInner.style.opacity = '0';
			glareInner.style.transform = 'rotate(180deg) translate(-50%, -50%)';

			glareElement.appendChild(glareInner);
			element.appendChild(glareElement);
			glareRef.current = glareInner;
		}

		if (!element.style.transform) {
			element.style.transformStyle = 'preserve-3d';
			element.style.willChange = 'transform';
			element.style.transition = `transform ${speed}ms ${easing}`;
			element.style.position = element.style.position || 'relative';
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!element) return;

			const rect = element.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			// Calculate the relative position of the mouse
			const x = (e.clientX - rect.left) / width;
			const y = (e.clientY - rect.top) / height;

			// Calculate rotation angles
			const tiltX = (max / 2 - max * y).toFixed(2);
			const tiltY = (max * x - max / 2).toFixed(2);

			// Apply the transformation
			element.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;

			// Handle the luminous halo effect
			if (glareRef.current) {
				const glarePos = x * 100;

				glareRef.current.style.transform = `rotate(${(90 * (x - 0.5) * 2)}deg) translate(-50%, -50%)`;
				glareRef.current.style.opacity = (glareMaxOpacity * y).toString();
				glareRef.current.style.left = `${glarePos}%`;
			}
		};

		const handleMouseEnter = () => {
			setIsHovering(true);

			if (element) {
				element.style.transition = `transform ${speed}ms ${easing}`;
			}

			if (glareRef.current) {
				glareRef.current.style.transition = `opacity ${speed}ms ${easing}`;
			}
		};

		const handleMouseLeave = () => {
			setIsHovering(false);

			if (element) {
				element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
			}

			if (glareRef.current) {
				glareRef.current.style.opacity = '0';
			}
		};


		// TODO: Needs more testing on various devices before validating this solution
		// Gyroscope support for mobile if enabled
		let gyroscopeHandler: ((e: DeviceOrientationEvent) => void) | null = null;

		if (gyroscope && window.DeviceOrientationEvent) {
			gyroscopeHandler = (e: DeviceOrientationEvent) => {
				if (!element || !e.beta || !e.gamma) return;

				const beta = Math.min(Math.max(e.beta, -90), 90);
				const gamma = Math.min(Math.max(e.gamma, -90), 90);

				// Calculate rotation angles based on device orientation
				const tiltX = (max * beta / 90).toFixed(2);
				const tiltY = (max * gamma / 90).toFixed(2);

				element.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;

				if (glareRef.current) {
					const normalizedGamma = (gamma + 90) / 180; // Normalize: 0 - 1
					const glarePos = normalizedGamma * 100;

					glareRef.current.style.transform = `rotate(${90 * (normalizedGamma - 0.5) * 2}deg) translate(-50%, -50%)`;
					glareRef.current.style.opacity = (glareMaxOpacity * (beta + 90) / 180).toString();
					glareRef.current.style.left = `${glarePos}%`;
				}
			};

			window.addEventListener('deviceorientation', gyroscopeHandler);
		}

		element.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseenter', handleMouseEnter);
		element.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			if (element) {
				element.removeEventListener('mousemove', handleMouseMove);
				element.removeEventListener('mouseenter', handleMouseEnter);
				element.removeEventListener('mouseleave', handleMouseLeave);
			}

			if (gyroscopeHandler) {
				window.removeEventListener('deviceorientation', gyroscopeHandler);
			}
		};
	}, [max, perspective, scale, speed, easing, glareMaxOpacity, glareColor, gyroscope]);

	return { elementRef, isHovering };
};
