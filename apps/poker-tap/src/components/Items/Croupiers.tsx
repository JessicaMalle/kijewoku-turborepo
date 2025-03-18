import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";
import {ItemName, ItemPrice, ItemTotal, StyledItem} from "./Item.styles.ts";

function Croupiers() {
  const { croupiers, buyCroupier } = useAppContext();
  const nextCroupierPrice = CroupierService.calculateCroupierCost(croupiers.length);
  const formattedPrice = useDigits({ value: nextCroupierPrice, digits: 0 })

  return (
    <StyledItem>
      <ItemName>Croupiers</ItemName>
      <ItemTotal>{croupiers.length}</ItemTotal>
      <ItemPrice>{formattedPrice}€</ItemPrice>
      <button type="button" onClick={buyCroupier}>
        buy croupier
      </button>
    </StyledItem>
  );
}

export default Croupiers;
