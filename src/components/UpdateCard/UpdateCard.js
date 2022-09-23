import { useState, useEffect } from 'react';

function UpdateCard({ amount, handleUpdateCardInCollection, handleDeleteCardFromCollection }) {
    const [newAmount, setNewAmount] = useState(amount);

    useEffect(() => {
        setNewAmount(amount);
    }, [amount]);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        handleUpdateCardInCollection(newAmount);
    }

    const handleDelete = (e) => {
        e.currentTarget.disabled = true;
        handleDeleteCardFromCollection();
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
                <button type='submit' disabled={newAmount == amount}>UPDATE</button>
            </form>
            <button disabled={false} onClick={(e) => handleDelete(e)}>DELETE</button>
        </div>
    )
}

export default UpdateCard;