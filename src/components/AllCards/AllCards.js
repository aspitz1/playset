import SingleCard from '../SingleCard/SingleCard';

function AllCards({ cards, error }) {
    const formattedCards = cards.map(card => {
        return <SingleCard key={card.id} card={card} />;
    }); 

    return (
        <main className='main-cards'>
            { formattedCards }
        </main>
    )

}

export default AllCards;

//{cards && !error ? null : <p>Looks like there isn't anything in your collection</p>}