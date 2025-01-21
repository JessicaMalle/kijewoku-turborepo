import { useContentDimensions } from '@kijewoku/hooks/layout';
import {useScreenOrientation} from '@kijewoku/hooks/screen';
import {type ReactNode, useEffect, useRef, useState} from 'react';
import {Button, Content, DarkBackground, Main, ScreenContainer} from "./aspect-flex-layout.styles.tsx";

function AspectFlexLayout({children}: {children: ReactNode}) {
  const orientation = useScreenOrientation();
  const [isPortrait, setIsPortrait] = useState<boolean>(orientation === 'portrait');
  const screenContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orientation) {
      setIsPortrait(orientation === 'portrait');
    }
  }, [orientation]);

  useContentDimensions({
    screenContainerRef: screenContainerRef,
    contentRef: contentRef,
    isPortrait: isPortrait,
  });

  const toggleFullscreen = () => {
    const screenContainer = screenContainerRef.current;
    if (screenContainer) {
      if (!document.fullscreenElement) {
        screenContainer.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  };

  return (
    <Main>
      <DarkBackground />
      <Button onClick={toggleFullscreen}>Toggle Fullscreen</Button>
      <ScreenContainer ref={screenContainerRef} isPortrait={isPortrait}>
        <Content ref={contentRef} isPortrait={isPortrait}>
          {children}
        </Content>
      </ScreenContainer>
    </Main>
  );
}

export default AspectFlexLayout;
