import styled from "styled-components";

export const StyledCard = styled.div<{ color: string; active?: string }>`
  width: 100px;
  min-width: 100px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  color: ${props => (props.color === 'hearts' || props.color === 'diamonds') ? 'red' : 'black'};
  box-shadow: ${props => props.active ? '0 0 10px 5px rgba(0, 0, 255, 0.5)' : 'none'};
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(1)'};
  transition: transform 0.2s, box-shadow 0.2s;
`;

export const CardValue = styled.div`
  font-size: 1.5em;
`;

export const CardSuit = styled.div`
  font-size: 2em;
  text-align: center;
`;
