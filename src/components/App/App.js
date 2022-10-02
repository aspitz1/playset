import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import AllCards from "../AllCards/AllCards";
import FindNewCard from "../FindNewCard/FindNewCard";
import CardDetails from "../CardDetails/CardDetails";
import PageNotFound from "../PageNotFound/PageNotFound";
import UpdateCard from "../UpdateCard/UpdateCard";
import AddNewCard from "../AddNewCard/AddNewCard";
import Footer from "../Footer/Footer";

import './App.css';

import {
  getCollection,
  findCardsByName,
  findCardsById,
  addCardToCollection,
  updateCardInCollection,
  deleteCardFromCollection,
} from "../../apiCalls/apiCalls";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [collection, setCollection] = useState([]);
  const [filterCredentials, setFilterCredentials] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [error, setError] = useState("");
  const [updateMsg, setUpdateMsg] = useState("");

  useEffect(() => {
    getCollection()
      .then((data) => {
        const cards = data.cards.map(card => {
          return {...card, amount: card.amount.toString()}
        });
        setCollection(cards);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleNewCardSearch = (cardName) => {
    setError("");
    setSearchResults([]);
    findCardsByName(cardName)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((err) => setError(err.message));
  };

  const handleAddCardToCollection = (numOfCards) => {
    addCardToCollection({
      name: selectedCard.name,
      magicApiId: selectedCard.magicApiId,
      imageUrl: selectedCard.imageUrl,
      amount: numOfCards,
    })
      .then((data) => {
        const { card } = data;
        setSelectedCard({
          ...selectedCard,
          inCollection: true,
          amount: numOfCards.toString()
        });
        setCollection([
          ...collection,
          {
            name: card.name,
            magicApiId: card.magicApiId,
            imageUrl: card.imageUrl,
            amount: card.amount.toString(),
            id: card.id,
          },
        ]);
      })
      .catch((err) => setError(err.message));
  };

  const handleUpdateCardInCollection = (newAmount) => {
    const cardFromCollection = collection.find(
      (card) => card.magicApiId === selectedCard.magicApiId
    );
    updateCardInCollection({
      ...cardFromCollection,
      amount: newAmount,
    })
      .then((data) => {
        const updatedCards = collection.map((card) => {
          if (card.id === data.card.id) {
            card.amount = data.card.amount.toString();
          }
          return card;
        });

        const updatedSelectedCard = {
          ...selectedCard,
          amount: data.card.amount.toString(),
        };

        setSelectedCard(updatedSelectedCard);
        setCollection(updatedCards);
        setUpdateMsg(
          `You now have ${newAmount} of ${updatedSelectedCard.name}.`
        );
        setTimeout(() => {
          setUpdateMsg("");
        }, 4000);
      })
      .catch((err) => setError(err.message));
  };

  const handleDeleteCardFromCollection = () => {
    const card = collection.find(
      (card) => card.magicApiId === selectedCard.magicApiId
    );
    deleteCardFromCollection(card.id)
      .then((data) => {
        const updatedCollection = collection.filter(
          (collectionCards) => card.id !== collectionCards.id
        );
        setSelectedCard({
          ...selectedCard,
          inCollection: false,
        });

        setCollection(updatedCollection);
        setUpdateMsg(data.message);
        setTimeout(() => {
          setUpdateMsg("");
        }, 4000);
      })
      .catch((err) => setError(err.message));
  };

  const handleShowCardInfo = (magicApiId) => {
    setSelectedCard({});
    const foundCard = searchResults.find(
      (card) => card.magicApiId === magicApiId
    );
    const card = collection.find((card) => card.magicApiId === magicApiId);
    if (foundCard) {
      setSelectedCard({
        ...foundCard,
        inCollection: card ? true : false,
        amount: card ? card.amount : 0,
      });
    } else {
      findCardsById(magicApiId)
        .then((data) => {
          setSelectedCard({
            ...data,
            inCollection: card ? true : false,
            amount: card ? card.amount : 0,
          });
          setError("");
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page-container">
            <Header
              buttonText={"search collection"}
              collection={collection}
              handleShowCardInfo={handleShowCardInfo}
              setFilterCredentials={setFilterCredentials}
              setFilteredCards={setFilteredCards}
              filterCredentials={filterCredentials}
              setError={setError}
            />
            <AllCards
              cards={filterCredentials ? filteredCards : collection}
              status={
                filterCredentials ? "No matches where found." : "Loading..."
              }
              handleShowCardInfo={handleShowCardInfo}
              handleNewCardSearch={null}
            />
            <Footer />
          </div>
        }
      />
      <Route
        path="/search"
        element={
          <div className="page-container">
            <Header buttonText={"home"} setError={setError} />
            <FindNewCard handleNewCardSearch={handleNewCardSearch} />
            <Footer />
          </div>
        }
      />
      <Route
        path="/search/:cardName"
        element={
          <div className="page-container">
            <Header buttonText={"home"} setError={setError} />
            <AllCards
              cards={searchResults}
              error={error}
              status={"Loading..."}
              handleNewCardSearch={handleNewCardSearch}
              handleShowCardInfo={handleShowCardInfo}
            />
            <Footer />
          </div>
        }
      />
      <Route
        path="/card/:magicApiId"
        element={
          <div className="page-container">
            <Header buttonText={"home"} setError={setError} />
              <CardDetails
                selectedCard={selectedCard}
                collection={collection}
                handleAddCardToCollection={handleAddCardToCollection}
                handleUpdateCardInCollection={handleUpdateCardInCollection}
                handleDeleteCardFromCollection={handleDeleteCardFromCollection}
                handleShowCardInfo={handleShowCardInfo}
                error={error}
                updateMsg={updateMsg}
              />
            <Footer />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="page-container">
            <Header buttonText={"home"} setError={setError} />
            <PageNotFound />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
