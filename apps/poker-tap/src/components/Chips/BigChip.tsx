import { useAnimation } from "@kijewoku/hooks/animation";
        import type { ReactNode } from "react";
        import { useChips } from "../../hooks/states/useChips.ts";
        import {StyledBigChipWrapper, StyledPokerChip} from "./BigChip.styles.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import {colors} from "../../Colors.styles.ts";

        function BigChip(): ReactNode {
          const { addChips, totalBonus } = useChips();
          const formatedTotalBonus = useDigits({value: totalBonus, digits: 2});

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

          return (
            <StyledBigChipWrapper>
              <StyledPokerChip
                ref={element => {
                  mouseDownAnimationRef.current = element;
                  mouseUpAnimationRef.current = element;
                  mouseEnterAnimationRef.current = element;
                  mouseLeaveAnimationRef.current = element;
                }}
                value="10"
                accentColor={colors.blues.darkBlue}
                primaryColor={colors.neutrals.white}
                secondaryColor={colors.neutrals.veryPaleLight}
                onClick={() => addChips(10)}
              />
              <p>Total Bonus: +{formatedTotalBonus} CpC</p>
            </StyledBigChipWrapper>
          );
        }

        export default BigChip;
