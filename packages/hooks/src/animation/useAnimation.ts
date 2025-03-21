import { useEffect, useRef } from 'react';

    interface AnimationOptions {
      keyframes: Keyframe[];
      options: KeyframeAnimationOptions;
      eventType?: keyof HTMLElementEventMap;
    }

    const useAnimation = ({ keyframes, options, eventType }: AnimationOptions) => {
      const elementRef = useRef<HTMLElement | null>(null);

      useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const startAnimation = () => {
          const animation = element.animate(keyframes, options);
          return () => animation.cancel();
        };

        if (eventType) {
          const handleEvent = (event: Event) => startAnimation();
          element.addEventListener(eventType, handleEvent);
          return () => element.removeEventListener(eventType, handleEvent);
        }
          startAnimation();
      }, [keyframes, options, eventType]);

      return elementRef;
    };

    export default useAnimation;
