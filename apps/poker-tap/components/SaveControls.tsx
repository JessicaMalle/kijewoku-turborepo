import {useSave} from "../src/hooks/useSave";

const SaveControls = () => {
  const { saveGame, clearSave } = useSave();

  return (
    <div>
      <button type="button" onClick={saveGame}>Save Game</button>
      <button type="button" onClick={clearSave}>Clear Save</button>
    </div>
  );
};

export default SaveControls;
