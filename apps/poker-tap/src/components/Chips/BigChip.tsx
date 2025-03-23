import { useAnimation } from "@kijewoku/hooks/animation";
        import type { ReactNode } from "react";
        import { useChips } from "../../hooks/states/useChips.ts";
        import {StyledBigChipWrapper, StyledPokerChip} from "./BigChip.styles.ts";
import {colors} from "../../Colors.styles.ts";

interface BigChipProps {
  size?: number;
  scale?: number;
  noInteraction?: boolean;
}

const BIG_CHIP_DEFAULT_SIZE = 151;

function BigChip({ size, scale = 1, noInteraction = false }: BigChipProps): ReactNode {
  const { addChips } = useChips();

  const calculatePokerChipScale = (): number => {
    if (size) {
      return (size / BIG_CHIP_DEFAULT_SIZE);
    }
    return scale;
  };

  //#region Animations
  const mouseDownAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1)' },
      { transform: 'scale(0.9)' },
    ],
    options: {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards'
    },
    eventType: 'mousedown'
  });

  const mouseUpAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' },
    ],
    options: {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards'
    },
    eventType: 'mouseup'
  });

  const mouseEnterAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' },
    ],
    options: {
      duration: 700,
      easing: 'ease-in-out'
    },
    eventType: 'mouseenter'
  });

  const mouseLeaveAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1)' },
      { transform: 'scale(0.9)' },
      { transform: 'scale(1)' },
      { transform: 'scale(0.95)' },
      { transform: 'scale(1)' },
    ],
    options: {
      duration: 700,
      easing: 'ease-in-out'
    },
    eventType: 'mouseleave'
  });
  //#endregion

  return (
    <StyledBigChipWrapper>
      <StyledPokerChip
        ref={element => {
          if (!noInteraction) {
            mouseDownAnimationRef.current = element;
            mouseUpAnimationRef.current = element;
            mouseEnterAnimationRef.current = element;
            mouseLeaveAnimationRef.current = element;
          }
        }}
        value="10"
        accentColor={colors.blues.darkBlue}
        primaryColor={colors.neutrals.white}
        secondaryColor={colors.neutrals.veryPaleLight}
        noInteraction={noInteraction}
        onClick={!noInteraction ? () => addChips(10) : undefined}
        scale={calculatePokerChipScale()}
      />
    </StyledBigChipWrapper>
  );
}

export default BigChip;
