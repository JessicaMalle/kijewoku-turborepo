import {useSave} from "../hooks/states/useSave.ts";
import Button from "./Button/Button.tsx";

const SaveControls = () => {
  const { saveGame, clearSave } = useSave();

  return (
    <div>
      <Button label={'Save Game'} onClick={saveGame} />
      <Button label={'Clear Save'} onClick={clearSave} />
    </div>
  );
};

export default SaveControls;
