import './SingleCard.css';

function SingleCard({ card }) {
    const { imageUrl, id, amount, name } = card;
    return (
        <button className='card-btn'>
            <img className='card-img' src={imageUrl} alt={name} id={id} />
            <p>Amount: {amount}</p>
        </button>
    )
}

export default SingleCard;