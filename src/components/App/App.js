import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import AllCards from '../AllCards/AllCards';
import FindNewCard from '../FindNewCard/FindNewCard';
import CardDetails from '../CardDetails/CardDetails';

import { 
    getCollection, 
    findCardsByName, 
    findCardsById, 
    addCardToCollection,
    updateCardInCollection,
    deleteCardFromCollection 
} from '../../apiCalls/apiCalls';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});
    const [collection, setCollection] = useState([]);
    const [filterCredentials, setFilterCredentials] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
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
    
    const handleAddCardToCollection = (numOfCards) => {
        addCardToCollection({
            name: selectedCard.name,
            magicApiId: selectedCard.magicApiId,
            imageUrl: selectedCard.imageUrl,
            amount: numOfCards
        })
        .then(data => {
            const { card } = data;
            setSelectedCard({
                ...selectedCard,
                inCollection: true
            })
            setCollection([
                ...collection,
                {
                    name: card.name,
                    magicApiId: card.magicApiId,
                    imageUrl: card.imageUrl,
                    amount: card.amount,
                    id: card.id
                }
            ])
        })
        .catch(err => setError(err));
    }

    const handleUpdateCardInCollection = (newAmount) => {
        const cardFromCollection = collection.find(card => card.name === selectedCard.name);
        updateCardInCollection({
            ...cardFromCollection,
            amount: newAmount
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const showCardInfo = (magicApiId) => {
        setSelectedCard({});
        const foundCard = searchResults.find(card => card.magicApiId === magicApiId);
        const card = collection.find(card => card.magicApiId === magicApiId);   
        if (foundCard) {
            setSelectedCard({ 
                ...foundCard, 
                inCollection: card ? true : false,
                currentAmount: card ? card.amount : null  
            });
        } else {
            findCardsById(magicApiId)
                .then(data => {
                    setSelectedCard({ 
                        ...data, 
                        inCollection: true,
                        currentAmount: card ? card.amount : null
                    });
                    setError('');
                })
                .catch(err => setError(err));
        }
    }

    return (
            <Routes>
                <Route path='/' element={
                    <div>
                        <Header 
                            buttonText={'search collection'} 
                            collection={collection} 
                            showCardInfo={showCardInfo}
                            setFilterCredentials={setFilterCredentials}
                            setFilteredCards={setFilteredCards} 
                            filterCredentials={filterCredentials}
                            setError={setError} 
                        />
                        <AllCards 
                            cards={filterCredentials ? filteredCards : collection} 
                            status={filterCredentials ? 'No matches where found.' : 'Loading...'} 
                            showCardInfo={showCardInfo} 
                        />
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
                        <AllCards 
                            cards={searchResults} 
                            error={error} status={'Loading...'} 
                            showCardInfo={showCardInfo} 
                        />
                    </div>
                } />
                <Route path='/card/:magicApiId' element={
                    <div>
                        <Header buttonText={'home'} setError={setError} />
                        <CardDetails 
                            selectedCard={selectedCard} 
                            handleAddCardToCollection={handleAddCardToCollection}
                            handleUpdateCardInCollection={handleUpdateCardInCollection}
                            error={error} 
                        />
                    </div>
                }
                />
            </Routes>
    );
}

export default App;