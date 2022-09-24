import { useParams } from 'react-router';
import { useEffect } from 'react';

import SingleCard from '../SingleCard/SingleCard';

import './AllCards.css';

function AllCards({ handleNewCardSearch, cards, showCardInfo, error, status }) {
  const { cardName } = useParams();
  useEffect(() => {
    if(handleNewCardSearch) {
        handleNewCardSearch(cardName);
    }
  }, []);

  const singleCards = cards.map((card) => {
    return (
      <SingleCard
        key={card.magicApiId}
        showCardInfo={showCardInfo}
        card={card}
      />
    );
  });

  return (
    <main>
      {!cards.length && !error ? <h2>{status}</h2> : null}
      {error && <h2>{error}</h2>}
      <section className="all-cards">{singleCards}</section>
    </main>
  );
}

export default AllCards;