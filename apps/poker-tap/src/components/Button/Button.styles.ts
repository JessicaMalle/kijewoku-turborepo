import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

export const ButtonContainer = styled.div`
      height: 51px;
      max-width: fit-content;
      position: relative;
      display: inline-block;
`;

export const StyledButton = styled.button`
      all: unset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      cursor: pointer;
      border: 3px solid ${colors.neutrals.dark};
      border-radius: 6px;
      background-color: ${colors.oranges.orange2};
      max-width: fit-content;
      height: 45px;

      > span {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 30px;
          background-color: ${colors.oranges.orangeYellow};
          border-radius: 3px;
          color: ${colors.neutrals.dark};
          font-weight: 700;
      }

      &:disabled {
          cursor: not-allowed;
          opacity: 0.6;
          border-color: ${colors.neutrals.medium};
          background-color: ${colors.neutrals.paleLight};

          > span {
              background-color: ${colors.neutrals.veryPaleLight};
              color: ${colors.neutrals.medium};
          }
      }
`;
