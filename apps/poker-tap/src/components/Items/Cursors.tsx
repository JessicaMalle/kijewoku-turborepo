import { useAppContext } from "../../hooks/states/useAppContext";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import CursorService from "../../services/CursorService.ts";

function Cursors() {
  const { cursors, buyCursor } = useAppContext();
  const nextCursorPrice = CursorService.calculateCursorCost(cursors);
  const formattedPrice = useDigits({ value: nextCursorPrice, digits: 0 })

  return (
    <div>
      <h3>Cursors</h3>
      <p>Number of Cursors: {cursors}</p>
      <button type="button" onClick={buyCursor}>
        Buy Cursor ({formattedPrice}€)
      </button>
    </div>
  );
}

export default Cursors;
