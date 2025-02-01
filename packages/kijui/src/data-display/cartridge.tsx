import { useGoldenRatio } from "@kijewoku/hooks/screen";
import {type ReactNode, useEffect} from 'react';
import { useState } from 'react';
import {Typography} from "../index.ts";
import { useDimensions } from "../store";
import { strHash } from "../utils/strHash.ts";
import { ButtonStyle, CartridgeStyle, CreditItemStyle, CreditsStyle, DetailsStyle, IllustrationStyle } from "./cartridge.styles.tsx";

const {Title2, Title3, Text} = Typography;

interface GameInfo {
  gameIndex: number;
  title: string;
  illustration: string;
  releaseDate?: string;
  synopsis: string;
  version: string;
  credits: Credit[];
  handleSlotCartridge: (gameIndex: number) => void;
  handleEjectCartridge: (gameIndex: number) => void;
}

interface Credit {
  name: string;
  role: string;
}

function Cartridge({
   gameIndex,
   title,
   illustration,
   releaseDate,
   synopsis,
   version,
   credits,
   handleSlotCartridge,
   handleEjectCartridge,
  }: GameInfo): ReactNode {
  const { dimensions } = useDimensions();
  const { get } = useGoldenRatio(dimensions);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isOpen) {
      handleEjectCartridge(gameIndex);
      setIsOpen(false);
    } else {
      handleSlotCartridge(gameIndex);
      setIsOpen(true);
    }
  }

  return (
    <CartridgeStyle size={get(13)}>
      <IllustrationStyle illustration={illustration} onClick={toggleOpen}>
        <ButtonStyle
          size={get(13)}
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-label={`Open game details for ${title}`}
        >
          {isOpen ? 'Close' : 'Open'}
        </ButtonStyle>
        <DetailsStyle isOpen={isOpen}>
          <Title2>{title}</Title2>
          <Text>{releaseDate}</Text>
          <Text>{synopsis}</Text>
          <Text>{version}</Text>
          <CreditsStyle>
            <Title3>Credits</Title3>
            <div>
              {credits.map((credit, index) => (
                <CreditItemStyle key={strHash(credit.name + index)}>
                  {credit.name} - {credit.role}
                </CreditItemStyle>
              ))}
            </div>
          </CreditsStyle>
        </DetailsStyle>
      </IllustrationStyle>
    </CartridgeStyle>
  );
}

export default Cartridge;
