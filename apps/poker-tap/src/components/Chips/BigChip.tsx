import type { ReactNode } from "react";
import { useChips } from "../../hooks/states/useChips.ts";
import {StyledPokerChip} from "./BigChip.styles.ts";

function BigChip(): ReactNode {
  const { addChips } = useChips();

  return (
    <StyledPokerChip onClick={() => addChips(1)} />
  );
}

export default BigChip;
