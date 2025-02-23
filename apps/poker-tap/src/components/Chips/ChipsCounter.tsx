import type {ReactNode} from "react";
import {useChips} from "../../hooks/states/useChips.ts";
import useCountToUtils from "../../hooks/utils/useCountTo.utils.ts";

function ChipsCounter(): ReactNode {
  const {chips, prevChips} = useChips();
  const currentValue = useCountToUtils({ from: prevChips, to: chips, speed: 200, delay: 100, digits: 0 });

  return (
    <div>
      <h2>Chips</h2>
      <p>{currentValue}</p>
    </div>
  )
}

export default ChipsCounter;
