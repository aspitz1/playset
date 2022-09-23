import { Link } from 'react-router-dom';

import NavButton from '../buttons/NavButton';

import { makeUpperCase,makeCamelCase } from '../../utilityFunctions/utilityFunctions';

function Navbar({ buttonText, setError }) {
    return (
        <nav className='navBar'>
            <Link to='/findNewCard'>
                <NavButton buttonText={'Find New Card'} setError={setError} />
            </Link>
            <Link to={( buttonText === 'home' ) ? '/' : `/${makeCamelCase(buttonText)}` }>
                <NavButton buttonText={makeUpperCase(buttonText)} setError={setError} />           
            </Link>
        </nav>
    )
}

export default Navbar;