import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const DeckBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${Colors.neutral.slate};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
`;

export const DeckBuilderTitle = styled.h2`
  margin: 0;
  padding: 5px 0;
  font-size: 1.5rem;
  color: ${Colors.neutral.white};
  text-align: center;
  text-shadow:
    -1px -1px 0 ${Colors.dark.nightPurple},
    1px -1px 0 ${Colors.dark.nightPurple},
    -1px 1px 0 ${Colors.dark.nightPurple},
    1px 1px 0 ${Colors.dark.nightPurple};
`;

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
`;

export const CardItem = styled.div<{ $isSelected?: boolean; $rarity: string }>`
  position: relative;
  width: 80px;
  height: 120px;
  background-color: ${({ $rarity }) => getCardRarityColor($rarity)};
  border: 2px solid ${({ $isSelected }) => $isSelected ? Colors.slateGreen.sage : '#333'};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
  box-shadow: ${({ $isSelected }) => $isSelected ? `0 0 10px ${Colors.slateGreen.sage}` : '0 2px 5px rgba(0,0,0,0.3)'};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const CardRarity = styled.div`
  font-size: 0.7rem;
  margin-top: 5px;
  color: #ffcc00;
`;

export const DeckInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.dark.lightPurple};
  border-radius: 5px;
`;

export const DeckCount = styled.div`
  font-size: 1rem;
  color: ${Colors.neutral.white};
`;

export const DeckActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button<{ $disabled?: boolean; $primary?: boolean }>`
  padding: 8px 15px;
  background-color: ${({ $disabled, $primary }) => 
    $disabled 
      ? Colors.dark.lightPurple 
      : $primary 
        ? Colors.slateGreen.sage 
        : Colors.dark.mediumPurple};
  color: ${Colors.neutral.white};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $disabled, $primary }) => 
      $disabled 
        ? Colors.dark.lightPurple 
        : $primary 
          ? Colors.slateGreen.darkSlate 
          : Colors.dark.nightPurple};
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  padding: 8px 15px;
  background-color: ${({ $active }) => 
    $active ? Colors.slateGreen.sage : Colors.dark.lightPurple};
  color: ${Colors.neutral.white};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 5px 5px 0 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $active }) => 
      $active ? Colors.slateGreen.sage : Colors.dark.mediumPurple};
  }
`;

// Helper function to get color based on card rarity
function getCardRarityColor(rarity: string): string {
  switch (rarity) {
    case "COMMON":
      return "#808080"; // Gray
    case "UNCOMMON":
      return "#2E8B57"; // Sea Green
    case "RARE":
      return "#4169E1"; // Royal Blue
    case "EPIC":
      return "#9932CC"; // Dark Orchid
    case "LEGENDARY":
      return "#FFD700"; // Gold
    default:
      return "#333333"; // Dark Gray
  }
}
