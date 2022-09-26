import { useParams } from "react-router";
import { useEffect } from "react";
import PropTypes from "prop-types";

import SingleCard from "../SingleCard/SingleCard";

import "./AllCards.css";

function AllCards({ handleNewCardSearch, cards, showCardInfo, error, status }) {
  const { cardName } = useParams();
  useEffect(() => {
    if (handleNewCardSearch) {
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
      {!cards.length && !error ? <h2 className="loading">{status}</h2> : null}
      {error && <h2 className="no-cards-found">{error}</h2>}
      <section className="all-cards">{singleCards}</section>
    </main>
  );
}

AllCards.prototype = {
  handleNewCardSearch: PropTypes.func,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      id: PropTypes.string,
      amount: PropTypes.number,
      name: PropTypes.string,
      magicApiId: PropTypes.string,
    })
  ),
  showCardInfo: PropTypes.func,
  error: PropTypes.string,
  status: PropTypes.string,
};

export default AllCards;
