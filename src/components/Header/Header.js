import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";

import "./Header.css";

function Header({
  buttonText,
  setError,
  collection,
  setFilterCredentials,
  setFilteredCards,
  filterCredentials,
}) {
  return (
    <header>
      <div className="heading-wrapper">
        <h1>Playset</h1>
        <p>Magic Card Collection Tracker</p>
      </div>
      <Navbar
        buttonText={buttonText}
        setError={setError}
        collection={collection}
        setFilterCredentials={setFilterCredentials}
        setFilteredCards={setFilteredCards}
        filterCredentials={filterCredentials}
      />
    </header>
  );
}

Header.propTypes = {
  buttonText: PropTypes.string,
  setError: PropTypes.func,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      id: PropTypes.string,
      amount: PropTypes.string,
      name: PropTypes.string,
      magicApiId: PropTypes.string,
    })
  ),
  setFilterCredentials: PropTypes.func,
  setFilteredCards: PropTypes.func,
  filterCredentials: PropTypes.string,
};

export default Header;
