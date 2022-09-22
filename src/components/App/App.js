import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import AllCards from '../AllCards/AllCards';

import { getCollection } from '../../apiCalls/apiCalls';

function App() {
    const [collection, setCollection] = useState([]);
    const [error, setError] = useState('');

    const loadCollection = async () => {
        const data = await getCollection();
        data.cards ? setCollection(data.cards) : setError(data);
    }

    useEffect(() => {
        loadCollection();
    }, []);

    return (
            <Routes>
                <Route path='/' element={
                    <div>
                        <Header buttonText={'search collection'} />
                        <AllCards cards={collection} error={error} />
                    </div>
                } />
                <Route path='/add' element={
                    <div>
                        <Header buttonText={'home'} />
                        <p>Hello!</p>
                    </div>
                } />
            </Routes>
    );
}

export default App;