import Navbar from '../Navbar/Navbar';

import './Header.css'

function Header({ buttonText, setError, collection, setFilterCredentials, setFilteredCards, filterCredentials}) {
    return (
        <header>
            <h1>Playset</h1>
            <Navbar 
                buttonText={buttonText} 
                setError={setError}  
                collection={collection}
                setFilterCredentials={setFilterCredentials}
                setFilteredCards={setFilteredCards} 
                filterCredentials={filterCredentials}
            />
        </header>
    )
}

export default Header;