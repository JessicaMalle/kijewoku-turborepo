import styled from "styled-components";

export const StyledButton = styled.button`
      all: unset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      cursor: pointer;
      border: 3px solid #3859b3;
      border-radius: 6px;
      background-color: #3388de;
      height: 45px;

      > span {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 30px;
          background-color: #36c5f4;
          border-radius: 3px;
		      color: #3859b3;
      }
`;
