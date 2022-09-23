import { useState } from 'react';

function AddNewCard() {
    const [numOfCards, setNumOfCards] = useState(0);

    return (
        <form>
            <input 
                type='number' 
                min='1'
                max='4'
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