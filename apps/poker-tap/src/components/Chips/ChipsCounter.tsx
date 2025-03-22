import type {ReactNode} from "react";
import {useChips} from "../../hooks/states/useChips.ts";
import {StyledChipsCounter} from "./ChipsCounter.styles.ts";
import {colors} from "../../Colors.styles.ts";
import {StyledPokerChip} from "./BigChip.styles.ts";
import Counter from "../DataDisplay/Counter.tsx";

function ChipsCounter(): ReactNode {
  const {chips, prevChips} = useChips();

  return (
    <StyledChipsCounter>
      <Counter
        icon={
          <StyledPokerChip
            value="1O"
            accentColor={colors.blues.darkBlue}
            primaryColor={colors.neutrals.white}
            secondaryColor={colors.neutrals.veryPaleLight}
            scale={0.25}
          />
        }
        label="Chips"
        value={{ from: prevChips, to: chips }}
      />
    </StyledChipsCounter>
  )
}

export default ChipsCounter;
