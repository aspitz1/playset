import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import AllCards from '../AllCards/AllCards';
import FindNewCard from '../FindNewCard/FindNewCard';
import CardDetails from '../CardDetails/CardDetails';

import { getCollection, findCardsByName, findCardsById } from '../../apiCalls/apiCalls';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});
    const [collection, setCollection] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getCollection()
            .then(data => {
                setCollection(data.cards)
            })
            .catch(err => setError(err.message));
    }, []);
    
    const handleNewCardSearch = (cardName) => {
        setSearchResults([]);
        findCardsByName(cardName)
            .then(data => {
                setSearchResults(data);
            })
            .catch(err => setError(err.message));
    }

    const showCardInfo = (magicApiId) => {
        setSelectedCard({});
        const foundCard = searchResults.find(card => card.magicApiId === magicApiId);
        if (foundCard) {   
            setSelectedCard(foundCard);
        } else {
            findCardsById(magicApiId)
                .then(data => {
                    setSelectedCard(data);
                    setError('');
                })
                .catch(err => setError(err));
        }
    }

    return (
            <Routes>
                <Route path='/' element={
                    <div>
                        <Header buttonText={'search collection'} setError={setError} />
                        <AllCards cards={collection} error={error} showCardInfo={showCardInfo} />
                    </div>
                } />
                <Route path='/findNewCard' element={
                    <div>
                        <Header buttonText={'home'} setError={setError} />
                        <FindNewCard handleNewCardSearch={handleNewCardSearch} />
                    </div>
                } />
                <Route path='/searchResults' element={
                    <div>
                        <Header buttonText={'home'} setError={setError} />
                        <AllCards cards={searchResults} error={error} showCardInfo={showCardInfo} />
                    </div>
                } />
                <Route path='/card/:magicApiId' element={
                    <div>
                        <Header buttonText={'home'} setError={setError} />
                        <CardDetails selectedCard={selectedCard} error={error} />
                    </div>
                }
                
                />
            </Routes>
    );
}

export default App;