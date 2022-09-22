import { Link } from 'react-router-dom';

import NavButton from '../buttons/NavButton';

import { makeUpperCase,makeCamelCase } from '../../utilityFunctions/utilityFunctions';

function Navbar({ buttonText }) {
    return (
        <nav className='navBar'>
            <Link to='/findNewCard'>
                <NavButton buttonText={'Find New Card'} />
            </Link>
            <Link to={( buttonText === 'home' ) ? '/' : `/${makeCamelCase(buttonText)}` }>
                <NavButton buttonText={makeUpperCase(buttonText)} />           
            </Link>
        </nav>
    )
}

export default Navbar;