import { Link } from 'react-router-dom';

import { UpdateBtn } from '../buttons/miscButtons';

import './SingleCard.css';

function SingleCard({ card, showCardInfo }) {
    const { imageUrl, id, amount, name, magicApiId } = card;
    return (
        <div>
            <Link 
                to={`/card/${magicApiId}`} 
                className='card-btn' 
                onClick={() => showCardInfo(magicApiId)}
            >
                <img className='card-img' src={imageUrl} alt={name} id={id} />
                {amount ? 
                        <p>Amount: {amount}</p>
                : null}
            </Link>
            <Link to={'/card/:magicApiId'} onClick={() => showCardInfo(magicApiId)}>
                <UpdateBtn />
            </Link>
        </div>
    )
}

export default SingleCard;