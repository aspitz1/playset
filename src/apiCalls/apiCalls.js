const getCollection = async (setFunction) => {
    try {
        const response = await fetch('https://playset-api.onrender.com/api/cards');
        if(!response.ok) {
            throw new Error('Sorry, looks like something went wrong.');
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

const findCardsByName = async (name) => {
    const formattedName = encodeURI(name);
    try {
        const response = await  fetch(`https://playset-api.onrender.com/api/proxy/cards/${formattedName}`);
        if(!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg);
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

const findCardsById = async (magicApiId) => {
    try {
        const response = await  fetch(`https://playset-api.onrender.com/api/proxy/card/${magicApiId}`);
        if(!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg);
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

const addCardToCollection = async (magicCard) => {
    try {
        const response = await fetch('https://playset-api.onrender.com/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(magicCard)
        });

        if(!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg);
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

const deleteCardFromCollection = async (id) => {
    try {
        const response = await fetch(`https://playset-api.onrender.com/api/cards/${id}`, {
            method: 'DELETE'
        });

        if(!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg);
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

const updateCardInCollection = async (magicCard) => {
    try {
        const response = await fetch(`https://playset-api.onrender.com/api/cards/${magicCard.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(magicCard)
        });

        if(!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg);
        } else {
            const data = await response.json();
            return data;
        }

    } catch(err) {
        throw err;
    }
}

export {
    getCollection,
    findCardsByName,
    findCardsById, 
    addCardToCollection,
    updateCardInCollection,
    deleteCardFromCollection
}