import AddNewCard from '../AddNewCard/AddNewCard';
import UpdateCard from '../UpdateCard/UpdateCard';

import './CardDetails.css';

function CardDetails({ selectedCard, error, handleAddCardToCollection, handleUpdateCardInCollection, handleDeleteCardFromCollection, deleteMsg }) {
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

    const legalitiesList = legalities ? legalities.map((legality, i) => {
        return (
            <li key={i}>{legality.format}: {legality.legality}</li>
        )
    }) : null;

    return (
        <main>
            <h2>{name} - <span>{colorIdentity}</span></h2>
            <figure>
                <img className='card-details-img' src={imageUrl} alt={name} />
                <figcaption>{artist}</figcaption>
            </figure>
            <article>
                <p>{type} - <span>{manaCost}</span></p>
                <p>{rarity}</p>
                <p>{setName}</p>
                <p className='card-text'>{text}</p>
                <ul>
                    {legalitiesList}
                </ul>
            </article> 
            <section>
                {error ? <p>{error}</p> : null}
                {deleteMsg ? <p>{deleteMsg}</p> : null}
                {!inCollection && name ? 
                    <AddNewCard handleAddCardToCollection={handleAddCardToCollection} /> : 
                    <UpdateCard 
                        amount={amount} 
                        handleUpdateCardInCollection={handleUpdateCardInCollection}
                        handleDeleteCardFromCollection={handleDeleteCardFromCollection}
                    />  
                }
            </section> 
        </main>
    );
}

export default CardDetails;