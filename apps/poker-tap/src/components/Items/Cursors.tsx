import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CursorService from "../../services/CursorService.ts";
import {ItemName, ItemPrice, ItemTotal, StyledItem} from "./Item.styles.ts";

function Cursors() {
  const { cursors, buyCursor } = useAppContext();
  const nextCursorPrice = CursorService.calculateCursorCost(cursors);
  const formattedPrice = useDigits({ value: nextCursorPrice, digits: 0 })

  return (
    <StyledItem>
      <ItemName>Cursors</ItemName>
      <ItemTotal>{cursors}</ItemTotal>
      <ItemPrice>{formattedPrice}€</ItemPrice>
      <button type="button" onClick={buyCursor}>
        buy cursor
      </button>
    </StyledItem>
  );
}

export default Cursors;
