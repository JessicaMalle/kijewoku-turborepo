import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CursorService from "../../services/CursorService.ts";
import {ItemCentralInfos, ItemImage, ItemName, ItemPrice, ItemTotal, StyledItem} from "./Item.styles.ts";
import Button from "../Button/Button.tsx";

function Cursors() {
  const { cursors, buyCursor } = useAppContext();
  const nextCursorPrice = CursorService.calculateCursorCost(cursors);
  const formattedPrice = useDigits({ value: nextCursorPrice, digits: 0 })

  return (
    <StyledItem>
      <ItemImage/>
      <ItemCentralInfos>
        <ItemName>Cursors</ItemName>
        <ItemPrice>{formattedPrice}€</ItemPrice>
      </ItemCentralInfos>
      <ItemTotal>{cursors}</ItemTotal>
      <Button onClick={buyCursor}>
        buy cursor
      </Button>
    </StyledItem>
  );
}

export default Cursors;
