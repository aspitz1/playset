import { useParams } from "react-router";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import UpdateCard from "../UpdateCard/UpdateCard";
import AddNewCard from "../AddNewCard/AddNewCard";

import "./CardDetails.css";

function CardDetails({
  handleShowCardInfo,
  selectedCard,
  collection,
  handleAddCardToCollection,
  handleDeleteCardFromCollection,
  handleUpdateCardInCollection,
  error,
  updateMsg
}) {
  const { magicApiId } = useParams();

  const {
    name,
    manaCost,
    colorIdentity,
    type,
    rarity,
    setName,
    text,
    legalities,
    imageUrl,
    artist,
    inCollection,
    amount
  } = selectedCard;

  const ref = useRef(true);

    useEffect(() => {
      if(collection.length && ref.current) {
        handleShowCardInfo(magicApiId);
        ref.current = false;
      }
    }, [collection]);

  const legalitiesList =
    legalities &&
    legalities.map((legality, i) => {
      return (
        <li key={i}>
          {legality.format}: {legality.legality}
        </li>
      );
    });

  const colors = colorIdentity ? colorIdentity.join("") : colorIdentity;

  return (
    <main>
      {!name ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="single-card-wrapper">
          <article className="single-card-description">
            <h2 className="name">
              {name}{" "}
              <span className={colors + " color-identity"}>{colors}</span>
            </h2>
            <figure className="card-details-fig">
              <img className="card-details-img" src={imageUrl} alt={name} />
              <figcaption className="artist">{artist}</figcaption>
            </figure>
            <p className="type">Type: {type}</p>
            <p className="mana-cost">Mana Cost: {manaCost || "none"}</p>
            <p className="rarity">Rarity: {rarity}</p>
            <p className="set-name">Set Name: {setName}</p>
            <p className="card-text">{text}</p>
            <ul className="legalities-list">{legalitiesList}</ul>
          </article>
          <section className="update-add-wrapper">
            {!inCollection ? (
              <AddNewCard
                error={error}
                updateMsg={updateMsg}
                handleAddCardToCollection={handleAddCardToCollection}
              />
            ) : (
              <UpdateCard
                amount={amount}
                updateMsg={updateMsg}
                handleUpdateCardInCollection={handleUpdateCardInCollection}
                handleDeleteCardFromCollection={
                  handleDeleteCardFromCollection
                }
              />
            )}
          </section>
        </div>
      )}
    </main>
  );
}

CardDetails.propTypes = {
  showCardInfo: PropTypes.func,
  selectedCard: PropTypes.object,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      id: PropTypes.string,
      amount: PropTypes.string,
      name: PropTypes.string,
      magicApiId: PropTypes.string,
    })
  ),
  error: PropTypes.string,
  handleAddCardToCollection: PropTypes.func,
  handleUpdateCardInCollection: PropTypes.func,
  handleDeleteCardFromCollection: PropTypes.func,
  updateMsg: PropTypes.string,
};

export default CardDetails;
