import { Link } from 'react-router-dom';

import './SingleCard.css';

function SingleCard({ card }) {
    const { imageUrl, id, amount, name, magicApiId } = card;
    return (
        <div className={amount ? 'card-wrapper' : 'search-card-wrapper'}>
            <Link to={`/card/${magicApiId}`} className='card-btn'>
                <img className='card-img' src={imageUrl} alt={name} id={id} />
                {amount && <p className='amount'>Amount: {amount}</p>}
            </Link>
        </div>
    )
}

export default SingleCard;