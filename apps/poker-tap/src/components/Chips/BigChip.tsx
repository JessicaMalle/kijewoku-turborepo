import type { ReactNode } from "react";
import { useChips } from "../../hooks/states/useChips.ts";
import {StyledPokerChip} from "./BigChip.styles.ts";

function BigChip(): ReactNode {
  const { addChips } = useChips();

  return (
    <StyledPokerChip
      onClick={() => addChips(10)}
      value="10"
      linesColor="#004080"
      backgroundColor="#eee"
      backLinesColor="#004080"
      darkBackgroundColor="#fff"
      textColor="#004080"
    />
  );
}

export default BigChip;
