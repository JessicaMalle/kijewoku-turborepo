import {useGoldenRatio} from "@kijewoku/hooks/screen";
import type { ReactNode } from 'react';
import {useDimensions} from "../store";
import {CartridgeStyle} from "./cartridge.styles.tsx";

function Cartridge(): ReactNode {
  const { dimensions } = useDimensions();
  const { get } = useGoldenRatio(dimensions);

  return (
    <CartridgeStyle size={get(13)}>
    </CartridgeStyle>
  );
}

export default Cartridge;
