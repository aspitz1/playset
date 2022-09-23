import { Link } from 'react-router-dom';

import NavButton from '../buttons/NavButton';
import SearchCollection from '../SearchCollection/SearchCollection';

import { makeUpperCase } from '../../utilityFunctions/utilityFunctions';

function Navbar({ buttonText, setError, collection, setFilterCredentials, setFilteredCards, filterCredentials }) {
    return (
        <nav className='navBar'>
            <Link to='/findNewCard'>
                <NavButton buttonText={'Find New Card'} setError={setError} />
            </Link>
            <Link to={( buttonText === 'home' ) ? '/' : null }>
                {buttonText === 'home' ? 
                    <NavButton buttonText={makeUpperCase(buttonText)} setError={setError} /> : 
                    <SearchCollection 
                        collection={collection}     
                        setFilterCredentials={setFilterCredentials}
                        setFilteredCards={setFilteredCards} 
                        filterCredentials={filterCredentials}  
                    />}           
            </Link>
        </nav>
    )
}

export default Navbar;