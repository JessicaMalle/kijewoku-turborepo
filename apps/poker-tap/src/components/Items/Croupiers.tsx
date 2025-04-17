import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";
import {ItemPrice} from "./Item.styles.ts";
import Button from "../Button/Button.tsx";

function Croupiers() {
  const { croupiers, buyCroupier } = useAppContext();
  const nextCroupierPrice = CroupierService.calculateCroupierCost(croupiers.length);
  const formattedPrice = useDigits({ value: nextCroupierPrice, digits: 0 })

  return (
    <Button label={<div>Buy for ${<ItemPrice>{formattedPrice}€</ItemPrice>} ({croupiers.length})</div>} onClick={buyCroupier} disabled={false} type="button" />
  );
}

export default Croupiers;
