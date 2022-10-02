import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import NavButton from "../buttons/NavButton";
import SearchCollection from "../SearchCollection/SearchCollection";

import { makeUpperCase } from "../../utilityFunctions/utilityFunctions";

import "./Navbar.css";

function Navbar({
  buttonText,
  setError,
  collection,
  setFilterCredentials,
  setFilteredCards,
  filterCredentials,
}) {
  const location = useLocation();

  return (
    <nav>
      <Link to="/search">
        {location.pathname !== "/search" && (
          <NavButton buttonText={"Find New Card"} setError={setError} />
        )}
      </Link>
      <Link to={buttonText === "home" ? "/" : null}>
        {buttonText === "home" ? (
          <NavButton
            buttonText={makeUpperCase(buttonText)}
            setError={setError}
          />
        ) : (
          <SearchCollection
            collection={collection}
            setFilterCredentials={setFilterCredentials}
            setFilteredCards={setFilteredCards}
            filterCredentials={filterCredentials}
          />
        )}
      </Link>
    </nav>
  );
}

Navbar.propTypes = {
  buttonText: PropTypes.string,
  setError: PropTypes.func,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      id: PropTypes.string,
      amount: PropTypes.number,
      name: PropTypes.string,
      magicApiId: PropTypes.string,
    })
  ),
  setFilterCredentials: PropTypes.func,
  setFilteredCards: PropTypes.func,
  filterCredentials: PropTypes.string
}

export default Navbar;
