import Navbar from '../Navbar/Navbar';

function Header({ buttonText, setError }) {
    return (
        <header>
            <h1>Playset</h1>
            <Navbar buttonText={buttonText} setError={setError} />
        </header>
    )
}

export default Header;