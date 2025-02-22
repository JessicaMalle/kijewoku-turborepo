import type {ReactNode} from "react";
import {useChips} from "../../hooks/useChips.ts";
import {StyledBigChip} from "./BigChip.styles.ts";

function BigChip(): ReactNode {
  const { addChips } = useChips();

  return (
    <StyledBigChip onClick={() => addChips(1)}>
      +1
    </StyledBigChip>
  )
}

export default BigChip;
