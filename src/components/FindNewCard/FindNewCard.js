import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FindNewCard({ handleNewCardSearch }) {
    const [cardName, setCardName] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewCardSearch(cardName);
        setCardName('');
        navigate('/searchResults');
    }

    return (
        <main>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input 
                    type='text' 
                    value={cardName}    
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder='Card Search' 
                />
                <button 
                    className='form-btn'
                    type='submit'
                    disabled={!cardName}
                >
                    SEARCH
                </button>
            </form>
        </main>
    )
}

export default FindNewCard;