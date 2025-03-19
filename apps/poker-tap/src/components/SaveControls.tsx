import {useSave} from "../hooks/states/useSave.ts";
import Button from "./Button/Button.tsx";

const SaveControls = () => {
  const { saveGame, clearSave } = useSave();

  return (
    <div>
      <Button onClick={saveGame}>Save Game</Button>
      <Button onClick={clearSave}>Clear Save</Button>
    </div>
  );
};

export default SaveControls;
