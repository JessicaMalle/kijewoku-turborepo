import styled from "styled-components";
import { Colors } from "../../Colors.styles.ts";

export const BoosterShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${Colors.neutral.slate};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const BoosterShopTitle = styled.h2`
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

export const BoosterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const BoosterCard = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 160px;
  padding: 10px;
  background-color: ${({ $isSelected }) =>
		$isSelected ? Colors.slateGreen.sage : Colors.dark.lightPurple};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  ${({ $isSelected }) =>
		$isSelected &&
		`
    box-shadow: 0 0 10px ${Colors.slateGreen.sage};
  `}
`;

export const BoosterImage = styled.div`
  width: 80px;
  height: 100px;
  background-color: ${Colors.dark.nightPurple};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const BoosterName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${Colors.neutral.white};
  text-align: center;
`;

export const BoosterCount = styled.div`
  font-size: 0.9rem;
  color: ${Colors.neutral.slate};
`;

export const BoosterDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${Colors.dark.lightPurple};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 8px;
`;

export const BoosterDescription = styled.div`
  font-size: 0.9rem;
  color: ${Colors.neutral.white};
  line-height: 1.4;
`;

export const BoosterPurchaseArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const BoosterPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Colors.neutral.white};
`;

export const OpenBoosterButton = styled.button<{ $disabled?: boolean }>`
  padding: 8px 15px;
  background-color: ${({ $disabled }) =>
		$disabled ? Colors.dark.lightPurple : Colors.slateGreen.sage};
  color: ${Colors.neutral.white};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ $disabled }) =>
			$disabled ? Colors.dark.lightPurple : Colors.slateGreen.darkSlate};
  }
`;

export const BuyBoosterButton = styled.button<{ $disabled?: boolean }>`
  padding: 8px 15px;
  background-color: ${({ $disabled }) =>
		$disabled ? Colors.dark.lightPurple : Colors.slateGreen.sage};
  color: ${Colors.neutral.white};
  border: 2px solid ${Colors.dark.mediumPurple};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ $disabled }) =>
			$disabled ? Colors.dark.lightPurple : Colors.slateGreen.darkSlate};
  }
`;
