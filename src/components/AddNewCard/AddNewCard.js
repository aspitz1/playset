import { useState } from 'react';

import './AddNewCard.css';

function AddNewCard({ handleAddCardToCollection }) {
    const [numOfCards, setNumOfCards] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCardToCollection(numOfCards)
        setNumOfCards(0);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type='number' 
                min='1'
                max='40'
                value={numOfCards} 
                onChange={(e) => setNumOfCards(e.target.value)} 
            />
        <button 
            type='submit'  
            className='form-btn'
            disabled={!numOfCards} 
        >
            ADD
        </button>
        </form>
    )
}

export default AddNewCard;