import type {ReactNode} from "react";
import {useChips} from "../../hooks/states/useChips.ts";
import useCountToUtils from "../../hooks/utils/useCountTo.utils.ts";
import {StyledChipsCounter} from "./ChipsCounter.styles.ts";

function ChipsCounter(): ReactNode {
  const {chips, prevChips} = useChips();
  const currentValue = useCountToUtils({ from: prevChips, to: chips, speed: 1000, delay: 100, digits: 0 });

  return (
    <StyledChipsCounter>
      <h2>Chips</h2>
      <p>{currentValue}</p>
    </StyledChipsCounter>
  )
}

export default ChipsCounter;
