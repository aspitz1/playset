import Navbar from '../Navbar/Navbar';

function Header({ buttonText }) {
    return (
        <header>
            <h1>Playset</h1>
            <Navbar buttonText={buttonText} />
        </header>
    )
}

export default Header;