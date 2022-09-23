import { useState } from 'react';

import AllCards from "../AllCards/AllCards";

function SearchCollection({ collection, showCardInfo }) {
    const [filterCredentials, setFilterCredentials] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    const handleChange = (e) => {
        setFilterCredentials(e.target.value.toLowerCase());
        const cards = collection.filter(card => card.name.toLowerCase().includes(filterCredentials));
        setFilteredCards(cards);
    }

    return (
        <section>
            <form>
                <input 
                    type='text' 
                    value={filterCredentials}  
                    placeholder='Search Collection'
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <AllCards 
                cards={filterCredentials ? filteredCards : collection} 
                status={'No matches where found.'} 
                showCardInfo={showCardInfo} 
            />
        </section>
    )
}

export default SearchCollection;