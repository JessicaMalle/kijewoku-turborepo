import type {ReactNode} from "react";
import {useChips} from "../../hooks/states/useChips.ts";
import {StyledChipsCounter} from "./ChipsCounter.styles.ts";
import Counter from "../DataDisplay/Counter.tsx";
import BigChip from "./BigChip.tsx";

function ChipsCounter(): ReactNode {
  const {chips, prevChips} = useChips();

  return (
    <StyledChipsCounter>
      <Counter
        icon={
          <BigChip
            noInteraction
            size={40}
          />
        }
        label="Chips"
        value={{ from: prevChips, to: chips }}
      />
    </StyledChipsCounter>
  )
}

export default ChipsCounter;
