import { useState } from 'react';

import './SearchCollection.css';

function SearchCollection({ collection, setFilterCredentials, setFilteredCards, filterCredentials }) {
    const handleChange = (e) => {
        setFilterCredentials(e.target.value.toLowerCase());
        const cards = collection.filter(card => card.name.toLowerCase().includes(filterCredentials));
        setFilteredCards(cards);
    }

    return (
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    className='search-collection-input'
                    type='text' 
                    value={filterCredentials}  
                    placeholder='Search Collection'
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </section>
    )
}

export default SearchCollection;