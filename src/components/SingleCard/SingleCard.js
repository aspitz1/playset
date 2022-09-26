import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./SingleCard.css";

function SingleCard({ card }) {
  const { imageUrl, id, amount, name, magicApiId } = card;
  return (
    <div className={amount ? "card-wrapper" : "search-card-wrapper"}>
      <Link to={`/card/${magicApiId}`} className="card-btn">
        <img className="card-img" src={imageUrl} alt={name} id={id} />
        {amount && <p className="amount">Amount: {amount}</p>}
      </Link>
    </div>
  );
}

SingleCard.propTypes = {
  card: PropTypes.shape({
    imageUrl: PropTypes.string,
    id: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    magicApiId: PropTypes.string
  })
}

export default SingleCard;
