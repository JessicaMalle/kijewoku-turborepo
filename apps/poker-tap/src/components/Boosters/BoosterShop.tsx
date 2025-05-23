import { useState } from "react";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import { StyledSection } from "../Layouts/Section.styles.ts";
import BigChip from "../Chips/BigChip.tsx";
import Modal from "../Modal/Modal.tsx";
import type { ReactNode } from "react";
import type { Booster, BoosterType, CardWithRarity } from "../../types/gameTypes.ts";
import Button from "../Button/Button.tsx";
import BoosterService from "../../services/BoosterService.ts";
import DeckBuilder from "../Deck/DeckBuilder.tsx";
import {
  BoosterCard,
  BoosterCount,
  BoosterDescription,
  BoosterDetails,
  BoosterImage,
  BoosterList,
  BoosterName,
  BoosterPrice,
  BoosterPurchaseArea,
  BoosterShopContainer,
  BoosterShopTitle,
  BuyBoosterButton,
  OpenBoosterButton,
} from "./BoosterShop.styles.ts";

// Booster descriptions
const BOOSTER_DESCRIPTIONS: Record<BoosterType, string> = {
  CLASSIC: "A classic booster pack containing 7 cards with different rarities. Each pack contains at least 1 rare card and has a chance to contain epic and legendary cards.",
};

function BoosterShop(): ReactNode {
  const {
    boosterCollection,
    cardCollection,
    buyBooster,
    openBooster,
    getBoosterPrice,
    canBuyBooster
  } = useAppContext();

  const [selectedType, setSelectedType] = useState<BoosterType>("CLASSIC");
  const [selectedBooster, setSelectedBooster] = useState<Booster | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openedCards, setOpenedCards] = useState<CardWithRarity[]>([]);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState<boolean>(false);
  const [isDeckBuilderOpen, setIsDeckBuilderOpen] = useState<boolean>(false);

  // Get unopened boosters of the selected type
  const unopenedBoosters = boosterCollection.boosters.filter(
    booster => booster.type === selectedType && !booster.opened
  );

  // Get the price of a new booster
  const boosterPrice = getBoosterPrice(selectedType);

  // Check if player can buy a booster
  const canBuy = canBuyBooster(selectedType);

  // Handle booster type selection
  const handleTypeSelect = (type: BoosterType) => {
    setSelectedType(type);
    setSelectedBooster(null);
  };

  // Handle booster selection
  const handleBoosterSelect = (booster: Booster) => {
    setSelectedBooster(booster);
  };

  // Handle buying a new booster
  const handleBuyBooster = () => {
    if (canBuy) {
      buyBooster(selectedType);
    }
  };

  // Handle opening a booster
  const handleOpenBooster = () => {
    if (selectedBooster && !selectedBooster.opened) {
      // Get the cards directly from BoosterService before updating the state
      const { openedCards: cards } = BoosterService.openBooster(
        boosterCollection,
        selectedBooster.uid
      );

      // Set the opened cards in the local state
      setOpenedCards(cards);

      // Update the global state
      openBooster(selectedBooster.uid);

      // Open the modal
      setIsModalOpen(true);
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOpenedCards([]);
  };

  // Open the card collection modal
  const handleOpenCollectionModal = () => {
    setIsCollectionModalOpen(true);
  };

  // Close the card collection modal
  const handleCloseCollectionModal = () => {
    setIsCollectionModalOpen(false);
  };

  // Open the deck builder modal
  const handleOpenDeckBuilder = () => {
    setIsDeckBuilderOpen(true);
  };

  // Close the deck builder modal
  const handleCloseDeckBuilder = () => {
    setIsDeckBuilderOpen(false);
  };

  return (
    <StyledSection>
      <BoosterShopContainer>
        <BoosterShopTitle>Booster Shop</BoosterShopTitle>

        {/* Buttons for card collection and deck builder */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
          <Button
            label="View Card Collection"
            onClick={handleOpenCollectionModal}
            hasTextShadow
          />
          <Button
            label="Deck Builder"
            onClick={handleOpenDeckBuilder}
            hasTextShadow
          />
        </div>

        {/* Booster type selection */}
        <BoosterList>
          <BoosterCard
            $isSelected={selectedType === "CLASSIC"}
            onClick={() => handleTypeSelect("CLASSIC")}
          >
            <BoosterImage>
              <span style={{ color: "white", fontSize: "1.5rem" }}>🃏</span>
            </BoosterImage>
            <BoosterName>Classic</BoosterName>
            <BoosterCount>
              {unopenedBoosters.length} available
            </BoosterCount>
          </BoosterCard>
          {/* More booster types can be added here in the future */}
        </BoosterList>

        {/* Booster details */}
        <BoosterDetails>
          <BoosterDescription>
            {BOOSTER_DESCRIPTIONS[selectedType]}
          </BoosterDescription>

          {/* Booster purchase area */}
          <BoosterPurchaseArea>
            <BoosterPrice>
              <BigChip noInteraction size={24} />
              {boosterPrice}
            </BoosterPrice>

            <BuyBoosterButton
              $disabled={!canBuy}
              onClick={handleBuyBooster}
              disabled={!canBuy}
            >
              Buy Booster
            </BuyBoosterButton>
          </BoosterPurchaseArea>

          {/* Unopened boosters list */}
          {unopenedBoosters.length > 0 && (
            <>
              <BoosterShopTitle>Your Boosters</BoosterShopTitle>
              <BoosterList>
                {unopenedBoosters.map((booster) => (
                  <BoosterCard
                    key={booster.uid}
                    $isSelected={selectedBooster?.uid === booster.uid}
                    onClick={() => handleBoosterSelect(booster)}
                  >
                    <BoosterImage>
                      <span style={{ color: "white", fontSize: "1.5rem" }}>🃏</span>
                    </BoosterImage>
                    <BoosterName>
                      {booster.type.charAt(0) + booster.type.slice(1).toLowerCase()}
                    </BoosterName>
                  </BoosterCard>
                ))}
              </BoosterList>

              {selectedBooster && (
                <BoosterPurchaseArea>
                  <OpenBoosterButton
                    onClick={handleOpenBooster}
                    disabled={!selectedBooster || selectedBooster.opened}
                    $disabled={!selectedBooster || selectedBooster.opened}
                  >
                    Open Booster
                  </OpenBoosterButton>
                </BoosterPurchaseArea>
              )}
            </>
          )}
        </BoosterDetails>
      </BoosterShopContainer>

      {/* Modal for displaying opened cards */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Booster Opened!"
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h3>You got {openedCards.length} cards!</h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center"
          }}>
            {openedCards.map((card) => (
              <div
                key={card.uid}
                style={{
                  width: "80px",
                  height: "120px",
                  backgroundColor: getCardRarityColor(card.rarity),
                  border: "2px solid #333",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  padding: "5px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
                }}
              >
                <div>{card.value}</div>
                <div>{getCardColorSymbol(card.color)}</div>
                <div style={{
                  fontSize: "0.7rem",
                  marginTop: "5px",
                  color: "#ffcc00"
                }}>
                  {card.rarity}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCloseModal}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal for displaying card collection */}
      <Modal
        isOpen={isCollectionModalOpen}
        onClose={handleCloseCollectionModal}
        title="Your Card Collection"
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h3>You have {cardCollection.cards.length} cards in your collection</h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            maxHeight: "400px",
            overflowY: "auto"
          }}>
            {cardCollection.cards.map((card) => (
              <div
                key={card.uid}
                style={{
                  width: "80px",
                  height: "120px",
                  backgroundColor: getCardRarityColor(card.rarity),
                  border: "2px solid #333",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  padding: "5px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
                }}
              >
                <div>{card.value}</div>
                <div>{getCardColorSymbol(card.color)}</div>
                <div style={{
                  fontSize: "0.7rem",
                  marginTop: "5px",
                  color: "#ffcc00"
                }}>
                  {card.rarity}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCloseCollectionModal}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Deck Builder Modal */}
      <DeckBuilder
        isOpen={isDeckBuilderOpen}
        onClose={handleCloseDeckBuilder}
      />
    </StyledSection>
  );
}

// Helper function to get color based on card rarity
function getCardRarityColor(rarity: string): string {
  switch (rarity) {
    case "COMMON":
      return "#808080"; // Gray
    case "UNCOMMON":
      return "#2E8B57"; // Sea Green
    case "RARE":
      return "#4169E1"; // Royal Blue
    case "EPIC":
      return "#9932CC"; // Dark Orchid
    case "LEGENDARY":
      return "#FFD700"; // Gold
    default:
      return "#333333"; // Dark Gray
  }
}

// Helper function to get symbol based on card color
function getCardColorSymbol(color: string): string {
  switch (color) {
    case "spades":
      return "♠";
    case "hearts":
      return "♥";
    case "clover":
      return "♣";
    case "diamonds":
      return "♦";
    default:
      return "";
  }
}

export default BoosterShop;
