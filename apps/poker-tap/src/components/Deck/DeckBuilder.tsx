import { useState, useEffect } from "react";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Modal from "../Modal/Modal.tsx";
import type { ReactNode } from "react";
import type { CardWithRarity } from "../../types/gameTypes.ts";
import {
  ActionButton,
  CardItem,
  CardRarity,
  CardsList,
  DeckActions,
  DeckBuilderContainer,
  DeckBuilderTitle,
  DeckCount,
  DeckInfo,
  Tab,
  TabContainer,
} from "./DeckBuilder.styles.ts";

function DeckBuilder({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): ReactNode {
  const {
    cardCollection,
    deck,
    hand,
    pokerPad,
    playedPokerPads,
    createDeck,
    updateDeck,
    canCreateDeck,
  } = useAppContext();

  const [selectedCardUids, setSelectedCardUids] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'collection' | 'deck'>('collection');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize selected cards with current deck if it exists
  // Also include cards that are in the hand
  useEffect(() => {
    if (deck.cards.length > 0) {
      // Get UIDs from deck cards
      const deckCardUids = deck.cards.map(card => card.uid);

      // Get UIDs from hand cards
      const handCardUids = hand.Cards.map(card => card.uid);

      // Combine and deduplicate
      const allCardUids = [...new Set([...deckCardUids, ...handCardUids])];

      setSelectedCardUids(allCardUids);
    }
  }, [deck, hand.Cards]);

  // Handle card selection/deselection
  const handleCardClick = (cardUid: string) => {
    // Check if the card is in the hand
    const isCardInHand = hand.Cards.some(card => card.uid === cardUid);

    // Check if the card is in a poker pad (current or played)
    const isCardInCurrentPokerPad = pokerPad.cards.some(card => card.uid === cardUid);
    const isCardInPlayedPokerPads = playedPokerPads.some(pad =>
      pad.cards.some(card => card.uid === cardUid)
    );
    const isCardInPokerPad = isCardInCurrentPokerPad || isCardInPlayedPokerPads;

    setSelectedCardUids(prev => {
      if (prev.includes(cardUid)) {
        // Don't allow deselecting cards that are in the hand
        if (isCardInHand) {
          setErrorMessage("You cannot remove cards that are currently in your hand.");
          return prev;
        }
        return prev.filter(uid => uid !== cardUid);
      } else {
        // Don't allow selecting cards that are in the hand
        if (isCardInHand) {
          setErrorMessage("You cannot select cards that are currently in your hand.");
          return prev;
        }
        // Don't allow selecting cards that are in poker pads
        if (isCardInPokerPad) {
          setErrorMessage("Cards in poker pads are no longer part of the deck.");
          return prev;
        }
        setErrorMessage(null);
        return [...prev, cardUid];
      }
    });
  };

  // Handle save deck
  const handleSaveDeck = () => {
    if (selectedCardUids.length < 32) {
      setErrorMessage("Your deck must contain at least 32 cards.");
      return;
    }

    // Check if all cards in hand are included in the selected cards
    const handCardUids = hand.Cards.map(card => card.uid);
    const allHandCardsIncluded = handCardUids.every(uid => selectedCardUids.includes(uid));

    if (!allHandCardsIncluded) {
      setErrorMessage("You cannot remove cards that are currently in your hand.");
      return;
    }

    // Check if any selected cards are in poker pads
    const currentPokerPadCardUids = pokerPad.cards.map(card => card.uid);
    const playedPokerPadsCardUids = playedPokerPads.flatMap(pad => pad.cards.map(card => card.uid));
    const allPokerPadCardUids = [...currentPokerPadCardUids, ...playedPokerPadsCardUids];

    const anyCardInPokerPad = selectedCardUids.some(uid => allPokerPadCardUids.includes(uid));

    if (anyCardInPokerPad) {
      setErrorMessage("Cards in poker pads are no longer part of the deck.");
      return;
    }

    if (deck.cards.length === 0) {
      // Create new deck
      const success = createDeck(selectedCardUids);
      if (success) {
        onClose();
      } else {
        setErrorMessage("Failed to create deck. Please check your card selection.");
      }
    } else {
      // Update existing deck
      const success = updateDeck(selectedCardUids);
      if (success) {
        onClose();
      } else {
        setErrorMessage("Failed to update deck. Please check your card selection.");
      }
    }
  };

  // Get cards to display based on active tab
  const getDisplayCards = (): CardWithRarity[] => {
    if (activeTab === 'collection') {
      return cardCollection.cards;
    } else {
      // Show only cards that are in the selected deck
      return cardCollection.cards.filter(card => selectedCardUids.includes(card.uid));
    }
  };

  // Check if a card is in a poker pad
  const isCardInPokerPad = (cardUid: string): boolean => {
    const isCardInCurrentPokerPad = pokerPad.cards.some(card => card.uid === cardUid);
    const isCardInPlayedPokerPads = playedPokerPads.some(pad =>
      pad.cards.some(card => card.uid === cardUid)
    );
    return isCardInCurrentPokerPad || isCardInPlayedPokerPads;
  };

  // Helper function to get card color symbol
  const getCardColorSymbol = (color: string): string => {
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
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Deck Builder"
    >
      <DeckBuilderContainer>
        <DeckBuilderTitle>
          {deck.cards.length === 0 ? "Create Your Deck" : "Update Your Deck"}
        </DeckBuilderTitle>

        <DeckInfo>
          <DeckCount>
            Selected Cards: {selectedCardUids.length}
            {selectedCardUids.length < 32 && (
              <span style={{ color: 'red' }}> (Minimum: 32)</span>
            )}
          </DeckCount>
          <DeckActions>
            <ActionButton
              onClick={handleSaveDeck}
              $disabled={!canCreateDeck(selectedCardUids)}
              $primary
              disabled={!canCreateDeck(selectedCardUids)}
            >
              {deck.cards.length === 0 ? "Create Deck" : "Update Deck"}
            </ActionButton>
            <ActionButton onClick={onClose}>
              Cancel
            </ActionButton>
          </DeckActions>
        </DeckInfo>

        {errorMessage && (
          <div style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>
            {errorMessage}
          </div>
        )}

        <TabContainer>
          <Tab
            $active={activeTab === 'collection'}
            onClick={() => setActiveTab('collection')}
          >
            Card Collection
          </Tab>
          <Tab
            $active={activeTab === 'deck'}
            onClick={() => setActiveTab('deck')}
          >
            Selected Cards
          </Tab>
        </TabContainer>

        <CardsList>
          {getDisplayCards().map((card) => (
            <CardItem
              key={card.uid}
              $isSelected={selectedCardUids.includes(card.uid)}
              $rarity={card.rarity}
              onClick={() => handleCardClick(card.uid)}
            >
              <div>{card.value}</div>
              <div>{getCardColorSymbol(card.color)}</div>
              <CardRarity>{card.rarity}</CardRarity>
              {hand.Cards.some(handCard => handCard.uid === card.uid) && (
                <div style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  backgroundColor: 'rgba(255, 0, 0, 0.7)',
                  color: 'white',
                  fontSize: '0.6rem',
                  padding: '2px 4px',
                  borderRadius: '3px'
                }}>
                  In Hand
                </div>
              )}
              {isCardInPokerPad(card.uid) && (
                <div style={{
                  position: 'absolute',
                  top: hand.Cards.some(handCard => handCard.uid === card.uid) ? '25px' : '5px',
                  right: '5px',
                  backgroundColor: 'rgba(128, 0, 128, 0.7)',
                  color: 'white',
                  fontSize: '0.6rem',
                  padding: '2px 4px',
                  borderRadius: '3px'
                }}>
                  In Poker Pad
                </div>
              )}
            </CardItem>
          ))}
          {getDisplayCards().length === 0 && (
            <div style={{ color: 'white', textAlign: 'center', width: '100%', padding: '20px' }}>
              {activeTab === 'collection'
                ? "You don't have any cards in your collection yet. Open boosters to get cards!"
                : "You haven't selected any cards yet."}
            </div>
          )}
        </CardsList>
      </DeckBuilderContainer>
    </Modal>
  );
}

export default DeckBuilder;
