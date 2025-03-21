import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";
import {ItemCentralInfos, ItemImage, ItemName, ItemPrice, ItemTotal, StyledItem} from "./Item.styles.ts";
import Button from "../Button/Button.tsx";

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
      <Button label={'buy croupier'} onClick={buyCroupier} />
    </StyledItem>
  );
}

export default Croupiers;
