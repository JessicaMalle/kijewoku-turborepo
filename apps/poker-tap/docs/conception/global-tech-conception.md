# Global tech conception

## Tech stack

This is a pure front-end application. It is built with React and Typescript.

## State management

The application uses native React Context for state management.

This is a small application, and the state management is simple.

There is no need for a more complex solution like Redux.

### GlobalState
```tsx
// src/context/GlobalState.tsx
import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// Initial state
const initialState = {
  chips: 0,
  hands: 1,
  clickerBonus: 1,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addPoints(chips: number) {
    dispatch({
      type: 'ADD_CHIPS',
      payload: chips,
    });
  }

  function buyHand() {
    dispatch({
      type: 'BUY_HAND',
    });
  }

  function addClickerBonus(bonus: number) {
    dispatch({
      type: 'ADD_CLICKER_BONUS',
      payload: bonus,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        chips: state.chips,
        hands: state.hands,
        clickerBonus: state.clickerBonus,
        addPoints,
        buyHand,
        addClickerBonus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
```
### AppReducer

```tsx
// src/context/AppReducer.ts
type Action =
  | { type: 'ADD_CHIPS'; payload: number }
  | { type: 'BUY_HAND' }
  | { type: 'ADD_CLICKER_BONUS'; payload: number };

export const AppReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'ADD_CHIPS':
        return {
            ...state,
            chips: state.chips + action.payload,
        };
        case 'BUY_HAND':
        return {
            ...state,
            hands: state.hands + 1,
        };
        case 'ADD_CLICKER_BONUS':
        return {
            ...state,
            clickerBonus: state.clickerBonus + action.payload,
        };
        default:
        return state;
    }
};
```


