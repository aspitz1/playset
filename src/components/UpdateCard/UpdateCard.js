import { useState, useEffect } from 'react';

function UpdateCard({ currentAmount, handleUpdateCardInCollection }) {
    const [newAmount, setNewAmount] = useState(currentAmount)

    useEffect(() => {
        setNewAmount(currentAmount)
    }, [currentAmount]);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        handleUpdateCardInCollection(newAmount);
    }

    return (
        <div>
            <form onSubmit={(e) => handleUpdateSubmit(e)} >
                <label>
                    Update Amount:
                    <input 
                        type='number' 
                        min='1'
                        max='40'
                        value={newAmount} 
                        onChange={(e) => setNewAmount(e.target.value)}
                    />
                </label>
                <button>UPDATE</button>
            </form>
            <button>DELETE</button>
        </div>
    )
}

export default UpdateCard;