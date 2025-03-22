import styled from "styled-components";

export const StyledButton = styled.button`
      all: unset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      cursor: pointer;
      border: 3px solid #94493a;
      border-radius: 6px;
      background-color: #e98537;
      height: 45px;

      > span {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 30px;
          background-color: #f3a833;
          border-radius: 3px;
		      color: #94493a;
		      font-weight: 700;
      }
`;
