import { useParams } from 'react-router';
import { useEffect } from 'react';

import AddNewCard from '../AddNewCard/AddNewCard';
import UpdateCard from '../UpdateCard/UpdateCard';

import './CardDetails.css';

function CardDetails({ showCardInfo, selectedCard, error, handleAddCardToCollection, handleUpdateCardInCollection, handleDeleteCardFromCollection, updateMsg }) {
    const { magicApiId } = useParams();

    useEffect(() => {
        showCardInfo(magicApiId)
    }, [])

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

    const legalitiesList = legalities && legalities.map((legality, i) => {
        return (
            <li key={i}>{legality.format}: {legality.legality}</li>
        )
    });

    const colors = colorIdentity ? colorIdentity.join('') : colorIdentity;

    return (
      <main>
        {!name ? (
          <h2 className='loading'>Loading...</h2>
        ) : (
          <div className="single-card-wrapper">
            <article className='single-card-description'>
              <h2 className="name">
                {name}{" "}
                <span className={colors + " color-identity"}>
                  {colors}
                </span>
              </h2>
              <figure className='card-details-fig'>
                <img className="card-details-img" src={imageUrl} alt={name} />
                <figcaption className='artist'>{artist}</figcaption>
              </figure>
              <p className="type">Type: {type}</p>
              <p className="mana-cost">Mana Cost: {manaCost || "none"}</p>
              <p className="rarity">Rarity: {rarity}</p>
              <p className="set-name">Set Name: {setName}</p>
              <p className="card-text">{text}</p>
              <ul className="legalities-list">{legalitiesList}</ul>
            </article>
            <section className='update-add-wrapper'>
              {!inCollection && name ? (
                <AddNewCard
                  error={error}
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

export default CardDetails;