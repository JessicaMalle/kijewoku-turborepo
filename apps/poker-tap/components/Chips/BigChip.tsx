import type {ReactNode} from "react";
import {useChips} from "../../src/hooks/useChips";
import {StyledBigChip} from "./BigChip.styles";

function BigChip(): ReactNode {
  const { addChips } = useChips();

  return (
    <StyledBigChip onClick={() => addChips(1)}>
      +1
    </StyledBigChip>
  )
}

export default BigChip;
