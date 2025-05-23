import DeckService from "./services/DeckService.ts";

// Create multiple decks to test for duplicate UIDs
const numDecks = 5;
const decks = [];

console.log(`Creating ${numDecks} decks to test for duplicate UIDs...`);

for (let i = 0; i < numDecks; i++) {
  const deck = DeckService.createDeck();
  decks.push(deck);
  console.log(`Deck ${i + 1} created with ${deck.cards.length} cards.`);
}

// Collect all UIDs from all decks
const allUids = decks.flatMap(deck => deck.cards.map(card => card.uid));
console.log(`Total cards across all decks: ${allUids.length}`);

// Check for duplicates
const uniqueUids = new Set(allUids);
console.log(`Unique UIDs: ${uniqueUids.size}`);

if (uniqueUids.size === allUids.length) {
  console.log("SUCCESS: All cards have unique UIDs!");
} else {
  console.log(`ERROR: Found ${allUids.length - uniqueUids.size} duplicate UIDs!`);

  // Find and log the duplicate UIDs
  const uidCounts = {};
  allUids.forEach(uid => {
    uidCounts[uid] = (uidCounts[uid] || 0) + 1;
  });

  const duplicates = Object.entries(uidCounts)
    .filter(([_, count]) => count > 1)
    .map(([uid, count]) => ({ uid, count }));

  console.log("Duplicate UIDs:", duplicates);
}
