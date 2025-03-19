import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";
import {ItemCentralInfos, ItemImage, ItemName, ItemPrice, ItemTotal, StyledItem} from "./Item.styles.ts";

function Croupiers() {
  const { croupiers, buyCroupier } = useAppContext();
  const nextCroupierPrice = CroupierService.calculateCroupierCost(croupiers.length);
  const formattedPrice = useDigits({ value: nextCroupierPrice, digits: 0 })

  return (
    <StyledItem>
      <ItemImage/>
      <ItemCentralInfos>
        <ItemName>Croupiers</ItemName>
        <ItemPrice>{formattedPrice}€</ItemPrice>
      </ItemCentralInfos>
      <ItemTotal>{croupiers.length}</ItemTotal>
      <button type="button" onClick={buyCroupier}>
        buy croupier
      </button>
    </StyledItem>
  );
}

export default Croupiers;
