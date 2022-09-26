import { useState } from "react";
import PropTypes from 'prop-types';

import "./AddNewCard.css";

function AddNewCard({ handleAddCardToCollection, error, updateMsg }) {
  const [numOfCards, setNumOfCards] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCardToCollection(numOfCards);
    setNumOfCards(0);
  };

  return (
    <form className="add-new-card-form" onSubmit={(e) => handleSubmit(e)}>
      {error && <p className="error">{error}</p>}
      {updateMsg && <p className="update">{updateMsg}</p>}
      <input
        className="add-card-input"
        type="number"
        min="1"
        max="40"
        value={numOfCards}
        onChange={(e) => setNumOfCards(e.target.value)}
      />
      <button type="submit" className="add-card-btn" disabled={!numOfCards}>
        ADD
      </button>
    </form>
  );
}

AddNewCard.propTypes ={
  handleAddCardToCollection: PropTypes.func,
  error: PropTypes.string,
  updateMsg: PropTypes.string
}

export default AddNewCard;
