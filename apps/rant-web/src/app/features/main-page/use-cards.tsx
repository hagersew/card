import { useEffect, useState } from 'react';
import { CardType } from '../../types/cardType';
import { allCards } from '../../utilities/data.json';

export function useCards() {
  const [allCardItems, setAllCardItems] = useState<CardType[]>([]);
  const [loadingCards, setLoadingCards] = useState(false);


  useEffect(() => {
    setLoadingCards(true);
    // Simulating API call
    allCards?.length && setAllCardItems(allCards);
    setLoadingCards(false);

    return () => {
      // Cancel API calls
      setLoadingCards(false);
      setAllCardItems([]);
    };
  }, []);

  const addCard = (card: CardType) => {
    const maxId: number = allCardItems.sort((a, b) => b.id - a.id)[0].id;
    card.id = maxId + 1;
    setAllCardItems([...allCardItems, card]);
  };

  const updateCard = (card: CardType) => {
    const updatedCards = [card, ...allCardItems.filter((i) => i.id != card.id)];
    setAllCardItems(updatedCards);
  };


  return { allCardItems, loadingCards, addCard, updateCard };

}
