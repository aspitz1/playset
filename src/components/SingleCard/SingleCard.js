import { Link } from 'react-router-dom';

import './SingleCard.css';

function SingleCard({ card, showCardInfo }) {
    const { imageUrl, id, amount, name, magicApiId } = card;
    return (
        <Link 
            to={`/card/${magicApiId}`} 
            className='card-btn' 
            onClick={() => showCardInfo(magicApiId)}
        >
            <img className='card-img' src={imageUrl} alt={name} id={id} />
            {amount ? 
                <div>
                    <p>Amount: {amount}</p>
                    <button>UPDATE</button>
                </div>
            : null}
        </Link>
    )
}

export default SingleCard;