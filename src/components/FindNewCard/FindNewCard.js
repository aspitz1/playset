import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FindNewCard.css";

function FindNewCard({ handleNewCardSearch }) {
  const [cardName, setCardName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardName("");
    navigate(`/search/${cardName}`);
  };

  return (
    <main>
      <div className="find-card-wrapper">
        <form className="find-new-card-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="find-new-card-input"
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Card Search"
          />
          <button
            className="find-new-card-btn"
            type="submit"
            disabled={!cardName}
          >
            SEARCH
          </button>
        </form>
      </div>
    </main>
  );
}

export default FindNewCard;
