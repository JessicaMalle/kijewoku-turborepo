import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CroupierService from "../../services/CroupierService.ts";

function Croupiers() {
  const { croupiers, buyCroupier } = useAppContext();
  const nextCroupierPrice = CroupierService.calculateCroupierCost(croupiers.length);
  const formattedPrice = useDigits({ value: nextCroupierPrice, digits: 0 })

  return (
    <div>
      <h3>Croupiers</h3>
      <p>Number of Croupiers: {croupiers.length}</p>
      <button type="button" onClick={buyCroupier}>
        Buy Croupier ({formattedPrice}€)
      </button>
    </div>
  );
}

export default Croupiers;
