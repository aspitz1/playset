const getCollection = async (setFunction) => {
    try {
        const response = await fetch('https://playset-api.onrender.com/api/cards');
        if(!response.ok) {
            throw new Error('Sorry, looks like something went wrong.');
        } else {
            const data = response.json();
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
            const data = response.json();
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
            const data = response.json();
            return data;
        }
    } catch(err) {
        throw err;
    }
}

export {
    getCollection,
    findCardsByName,
    findCardsById
}