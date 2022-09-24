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

    return (
      <main>
        {!name ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <h2>
              {name} <span>{colorIdentity}</span>
            </h2>
            <figure>
              <img className="card-details-img" src={imageUrl} alt={name} />
              <figcaption>{artist}</figcaption>
            </figure>
            <article>
              <p>Type: {type}</p>
              <p>Mana Cost: {manaCost || "none"}</p>
              <p>Rarity: {rarity}</p>
              <p>Set Name: {setName}</p>
              <p className="card-text">{text}</p>
              <ul>{legalitiesList}</ul>
            </article>
            <section>
              {error ? <p>{error}</p> : null}
              {updateMsg ? <p>{updateMsg}</p> : null}
              {!inCollection && name ? (
                <AddNewCard
                  handleAddCardToCollection={handleAddCardToCollection}
                />
              ) : (
                <UpdateCard
                  amount={amount}
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