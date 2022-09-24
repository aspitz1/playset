import './buttons.css';

function NavButton({ buttonText, setError }) {
    return (
        <button 
            className='navButton'   
            onClick={() => setError('')}    
        >
            { buttonText }
        </button>
    )
} 

export default NavButton;