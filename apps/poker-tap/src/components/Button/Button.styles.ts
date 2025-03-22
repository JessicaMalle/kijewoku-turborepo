import styled from "styled-components";
import {colors} from "../../Colors.styles.ts";

export const StyledButton = styled.button`
      all: unset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      cursor: pointer;
      border: 3px solid ${colors.neutrals.dark};
      border-radius: 6px;
      background-color: ${colors.oranges.orange2};
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
`;
