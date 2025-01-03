import styled from "styled-components";
import {ReactNode} from "react";

function Salut(): ReactNode {
  const StyledSalut = styled.div`
    font-size: 49px;
      color: chartreuse;
  `;

  return (
    <StyledSalut>
      SALUT !
    </StyledSalut>
  );
}

export default Salut;
