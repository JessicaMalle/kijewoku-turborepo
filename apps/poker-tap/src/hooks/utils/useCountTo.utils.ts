import { useEffect, useRef, useState } from 'react';

interface UseCountToProps {
  from?: number;
  to: number;
  speed: number;
  delay?: number;
  digits?: number;
}

const useCountToUtils = ({
                      from = 0,
                      to,
                      speed,
                      delay = 100,
                      digits = 0,
                    }: UseCountToProps): number => {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateValue = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const value = Math.min(progress / speed, 1) * (to - from) + from;

      setCurrentValue(value);

      if (progress < speed) {
        animationFrameRef.current = requestAnimationFrame(updateValue);
      }
    };

    const timeoutId = setTimeout(() => {
      startTimeRef.current = null;
      animationFrameRef.current = requestAnimationFrame(updateValue);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [from, to, speed, delay, digits]);

  return Number(currentValue.toFixed(digits));
};

export default useCountToUtils;
