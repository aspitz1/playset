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
    const [deleteMsg, setDeleteMsg] = useState('');

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
        .catch(err => setError(err.message));
    }

    const handleUpdateCardInCollection = (newAmount) => {
        const cardFromCollection = collection.find(card => card.magicApiId === selectedCard.magicApiId);
        updateCardInCollection({
            ...cardFromCollection,
            amount: newAmount
        })
        .then(data => {
            const updatedCards = collection.map(card => {
                if(card.id === data.card.id) {
                    card.amount = data.card.amount
                }
                return card;
            });

            const updatedSelectedCard = { ...selectedCard, amount: data.card.amount };

            setSelectedCard(updatedSelectedCard);
            setCollection(updatedCards);
        })
        .catch(err => setError(err.message));
    }

    const showCardInfo = (magicApiId) => {
        setSelectedCard({});
        const foundCard = searchResults.find(card => card.magicApiId === magicApiId);
        const card = collection.find(card => card.magicApiId === magicApiId);   
        if (foundCard) {
            setSelectedCard({ 
                ...foundCard, 
                inCollection: card ? true : false,
                amount: card ? card.amount : 0  
            });
        } else {
            findCardsById(magicApiId)
                .then(data => {
                    setSelectedCard({ 
                        ...data, 
                        inCollection: true,
                        amount: card ? card.amount : 0
                    });
                    setError('');
                })
                .catch(err => setError(err.message));
        }
    }

    const handleDeleteCardFromCollection = () => {
        const card = collection.find(card => card.magicApiId === selectedCard.magicApiId); 
        deleteCardFromCollection(card.id)
            .then(data => {
                const updatedCollection = collection.filter(collectionCards => card.id !== collectionCards.id);
                setSelectedCard({
                    ...selectedCard,
                    inCollection: false
                });
                
                setCollection(updatedCollection);
                setDeleteMsg(data.message);
                setTimeout(() => {
                    setDeleteMsg('');
                }, 5000);
            })
            .catch(err => setError(err.message));
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
                            handleDeleteCardFromCollection={handleDeleteCardFromCollection}
                            error={error} 
                            deleteMsg={deleteMsg}
                        />
                    </div>
                }
                />
            </Routes>
    );
}

export default App;