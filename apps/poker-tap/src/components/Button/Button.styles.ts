import styled from "styled-components";

export const StyledButton = styled.button`
      all: unset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      cursor: pointer;
      border: 3px solid black;
      border-radius: 6px;
      background-color: grey;
      height: 45px;

      > span {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 30px;
          background-color: white;
          border-radius: 3px;
		      color: black;
      }

      &:hover {
          height: 44px;
          transform: translateY(1px);
      }

      &:active {
          height: 43px;
          transform: translateY(2px);
      }
`;
