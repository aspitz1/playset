import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./UpdateCard.css";

function UpdateCard({
  amount,
  handleUpdateCardInCollection,
  handleDeleteCardFromCollection,
  error,
  updateMsg,
}) {
  const [newAmount, setNewAmount] = useState(amount); 

  useEffect(() => {
    if(!amount) {
      setNewAmount(amount);
    }
  }, [amount]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    handleUpdateCardInCollection(newAmount);
  };

  const handleDelete = (e) => {
    e.currentTarget.disabled = true;
    handleDeleteCardFromCollection();
  };

  return (
    <div className="update-card-wrapper">
      <form onSubmit={(e) => handleUpdateSubmit(e)}>
        {error && <p className="error">{error}</p>}
        {updateMsg && <p className="update">{updateMsg}</p>}
        <label className="update-label">
          Update Amount:
          <input
            className="input-number"
            type="number"
            min="1"
            max="40"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
        </label>
        <button
          className="update-btn"
          type="submit"
          disabled={newAmount == amount}
        >
          UPDATE
        </button>
      </form>
      <button
        className="delete-btn"
        disabled={false}
        onClick={(e) => handleDelete(e)}
      >
        DELETE
      </button>
    </div>
  );
}

UpdateCard.propTypes = {
  amount: PropTypes.number,
  handleUpdateCardInCollection: PropTypes.func,
  handleDeleteCardFromCollection: PropTypes.func,
  error: PropTypes.string,
  updateMsg: PropTypes.string
};

export default UpdateCard;
