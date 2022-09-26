import "./buttons.css";
import PropTypes from "prop-types";

function NavButton({ buttonText, setError }) {
  return (
    <button className="navButton" onClick={() => setError("")}>
      {buttonText}
    </button>
  );
}

NavButton.propTypes = {
  buttonText: PropTypes.string,
  setError: PropTypes.func
}

export default NavButton;
