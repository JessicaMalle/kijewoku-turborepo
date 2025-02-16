# 🏗️ Code Architecture

## 🌟 Introduction
To maintain a well-structured project, it is essential to follow a clear architecture that separates game logic from other application layers. This document provides recommendations on how to organize game rules efficiently within the project.

## 🔍 1. Separation of Concerns
- **UI Components**: React components should focus solely on rendering and user interaction.
- **Game Logic**: Game logic should be encapsulated within services or custom hooks.
- **State Management**: Use contexts and reducers to manage global state effectively.

## 🏗️ 2. Project Structure
```
src/
├── components/       # React components
│   ├── ExampleComponent.tsx
│   └── ...
├── context/         # Contexts and providers for global state management
│   ├── GameContext.tsx
│   ├── GameProvider.tsx
│   ├── GameReducer.ts
│   └── useGame.ts
├── hooks/           # Custom hooks encapsulating game logic
│   ├── useChips.ts
│   └── ...
├── services/        # Services implementing game logic
│   ├── ChipsService.ts
│   └── ...
├── utils/           # Utility functions and helpers
│   ├── formatDate.ts
│   └── ...
└── main.tsx
```

## ⚙️ 3. Implementing Services
### 💾 ChipsService.ts
```typescript
// src/services/ChipsService.ts
function addChips(currentChips: number, chipsToAdd: number): number {
  return currentChips + chipsToAdd;
}

const ChipsService = {
  addChips,
}

export default ChipsService;

```

## 🔄 4. Using Services
### ⚙️ In the reducer
```typescript
type Action =
  | { type: "ADD_CHIPS"; payload: number }

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: ChipsService.addChips(state.chips, action.payload) };
    default:
      return state;
  }
};
```
### 🎮 In a custom hook
```typescript
// src/hooks/useChips.ts
export const useChips = () => {
  const { chips, addChips } = useGame();

  const handleAddChips = (chipsToAdd: number) => {
    addChips(chipsToAdd);
  };

  return {
    chips,
    handleAddChips,
  };
};
```

## 🖥️ 5. Using Hooks in Components
### 📝 ExampleComponent.tsx
```typescript
// src/components/ExampleComponent.tsx
import { useChips } from "../hooks/useChips";

const ExampleComponent = () => {
  const { chips, handleAddChips } = useChips();

  return (
    <div>
      <h1>Poker Tap</h1>
      <p>Chips: {chips}</p>
      <button onClick={() => handleAddChips(10)}>Add 10 Chips</button>
    </div>
  );
};

export default ExampleComponent;
```

## 🎯 Conclusion
By following these short guidelines, you can keep the project organized and maintainable. Separating concerns between UI components, game logic, and state management ensures a scalable and efficient codebase. Implementing services and custom hooks enhances reusability and simplifies testing, making your application more robust and easy to manage.

