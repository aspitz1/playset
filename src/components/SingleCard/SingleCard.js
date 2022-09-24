import { Link } from 'react-router-dom';

import { UpdateBtn } from '../buttons/miscButtons';

import './SingleCard.css';

function SingleCard({ card }) {
    const { imageUrl, id, amount, name, magicApiId } = card;
    return (
        <div>
            <Link to={`/card/${magicApiId}`} className='card-btn'>
                <img className='card-img' src={imageUrl} alt={name} id={id} />
                {amount && <p>Amount: {amount}</p>}
            </Link>
            {
                id &&
                <Link to={`/card/${magicApiId}`}>
                    <UpdateBtn /> 
                </Link>
            }
        </div>
    )
}

export default SingleCard;