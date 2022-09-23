import SingleCard from '../SingleCard/SingleCard';

function AllCards({ cards, showCardInfo, error, status }) {
    const formattedCards = cards.map(card => {
        return <SingleCard key={card.magicApiId} showCardInfo={showCardInfo} card={card} />;
    }); 
 
    return (
        <main className='main-cards'>
            {!cards.length && !error ? <h2>{status}</h2> : null}
            {error ? <h2>{error}</h2> : null}
            { formattedCards }
        </main>
    )

}

export default AllCards;