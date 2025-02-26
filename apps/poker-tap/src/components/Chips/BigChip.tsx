import type { ReactNode } from "react";
import { useChips } from "../../hooks/states/useChips.ts";
import {StyledPokerChip} from "./BigChip.styles.ts";

function BigChip(): ReactNode {
  const { addChips } = useChips();

  return (
    <StyledPokerChip
      value="10"
      accentColor="#004080"
      primaryColor="#eee"
      secondaryColor="#fff"

      onClick={() => addChips(10)}
    />
  );
}

export default BigChip;
