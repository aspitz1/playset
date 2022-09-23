import './CardDetails.css';

function CardDetails({ selectedCard, error }) {
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
        artist
    } = selectedCard;

    const legalitiesList = legalities ? legalities.map((legality, i) => {
        return (
            <li key={i}>{legality.format}: {legality.legality}</li>
        )
    }) : null;

    return (
        <main>
            {name ? <h2>{name} - <span>{colorIdentity}</span></h2> : <h2>Loading...</h2>}
            {error ? <p>{error}</p> : null}
            <figure>
                <img className='card-details-img' src={imageUrl} alt={name} />
                <figcaption>{artist}</figcaption>
            </figure>
            <article>
                <p>{type} - <span>{manaCost}</span></p>
                <p>{rarity}</p>
                <p className='card-text'>{text}</p>
                <ul>
                    {legalitiesList}
                </ul>
            </article>
        </main>
    );
}

export default CardDetails;