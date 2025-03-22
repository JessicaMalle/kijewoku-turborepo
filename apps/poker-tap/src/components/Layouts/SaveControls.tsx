import {useSave} from "../../hooks/states/useSave.ts";
import Button from "../Button/Button.tsx";
import {StyledSaveControls} from "./SaveControles.styles.ts";

const SaveControls = () => {
  const { saveGame, clearSave } = useSave();

  return (
    <StyledSaveControls>
      <Button label={'Save Game'} onClick={saveGame} />
      <Button label={'Clear Save'} onClick={clearSave} />
    </StyledSaveControls>
  );
};

export default SaveControls;
