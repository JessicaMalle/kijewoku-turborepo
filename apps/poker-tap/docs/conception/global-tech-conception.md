# 🌐 Global tech conception

## 🛠 Tech stack

This is a pure front-end application. It is built with React and Typescript.

## 🗂️ State management

This application uses React Context to manage global state efficiently without the need for a complex solution like Redux.

To keep things clean, scalable, and type-safe, the state management is structured as follows:
1.	GameContext: Defines the global state and actions.
2.	GameProvider: Manages state updates using useReducer and provides actions to modify the state.
3.	AppReducer: Handles state logic by processing dispatched actions.
4.	useGame (Custom Hook): Simplifies access to the global state and ensures it is used correctly inside components.

This structure ensures better separation of concerns, strong TypeScript support, and easier usage in components via the useGame() hook.

### 🌍 GameContext

```tsx
// src/context/GameContext.tsx
import { createContext } from "react";

export interface GameState {
  chips: number;
  hands: number;
  clickerBonus: number;
  addChips: (chips: number) => void;
  buyHand: () => void;
  addClickerBonus: (bonus: number) => void;
}

// Creating the context with `undefined` to enforce proper usage via `useGame`
export const GameContext = createContext<GameState | undefined>(undefined);
```
### 🎮 GameProvider

```tsx
// src/context/GameProvider.tsx
import { ReactNode, useReducer } from "react";
import { GameContext } from "./GameContext";
import { AppReducer } from "./AppReducer";

const initialState = {
  chips: 0,
  hands: 1,
  clickerBonus: 1,
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addChips = (chips: number) => dispatch({ type: "ADD_CHIPS", payload: chips });
  const buyHand = () => dispatch({ type: "BUY_HAND" });
  const addClickerBonus = (bonus: number) => dispatch({ type: "ADD_CLICKER_BONUS", payload: bonus });

  return (
    <GameContext.Provider value={{ ...state, addChips, buyHand, addClickerBonus }}>
      {children}
    </GameContext.Provider>
  );
};
```

### ⚙️ AppReducer

```tsx
// src/context/AppReducer.ts
import { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS"; payload: number }
  | { type: "BUY_HAND" }
  | { type: "ADD_CLICKER_BONUS"; payload: number };

export const AppReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: state.chips + action.payload };
    case "BUY_HAND":
      return { ...state, hands: state.hands + 1 };
    case "ADD_CLICKER_BONUS":
      return { ...state, clickerBonus: state.clickerBonus + action.payload };
    default:
      return state;
  }
};
```

### 🔥 Custom Hook useGame (to avoid useContext(GameContext) everywhere)

```tsx
// src/context/useGame.ts
import { useContext } from "react";
import { GameContext } from "./GameContext";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
```

### 📚 Example Usage in a Component

```tsx
// src/components/ExampleComponent.tsx
import { useGame } from "../context/useGame";

const ExampleComponent = () => {
  const { chips, hands, clickerBonus, addChips, buyHand, addClickerBonus } = useGame();

  return (
    <div>
      <h1>Poker Tap</h1>
      <p>Chips: {chips}</p>
      <p>Hands: {hands}</p>
      <p>Clicker Bonus: {clickerBonus}</p>
      <button onClick={() => addChips(10)}>Add 10 Chips</button>
      <button onClick={buyHand}>Buy Hand</button>
      <button onClick={() => addClickerBonus(5)}>Add 5 Clicker Bonus</button>
    </div>
  );
};

export default ExampleComponent;
```

### 🔗 Setting Up the Provider in main.tsx

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameProvider } from "./context/GameProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
```

### 💾 Saved data

* chips: `number`
* dealersCount: `number`
* hands: `Hand[]`
* history: `History`
* exitDatetime: `Date`

### 🃏 Object types

#### Hand
* cards: `Card[]`
* combinationUid: `string`

#### Deck
* cards: `Card[]`

#### Card
* color: `'spades'|'hearts'|'clover'|'diamonds'`
* value: `'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'J'|'Q'|'K'|'A'`

#### Combination
* uid: `string`
* bonusValue: `number`

#### History
* startDatetime: `Date`
* totalChipsAcquired: `number`
* totalHandsAdded: `number`
* totalDealersAcquired: `number`

### 🎮 Actions
* Tap on the Chip
* Buy Upgrade
* Buy Object
* Draw Card
* Discard Card
* Save Game
* Delete Save

### 🏦 Casino (the game store)

Player can buy some objects in the Casino.

* Croupier
* Hand

### 🚀 Upgrades

_(For later...)_


