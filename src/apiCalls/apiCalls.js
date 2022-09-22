const getCollection = async () => {
    try {
        const response = await fetch('https://playset-api.onrender.com/api/cards');
        if(!response.ok) {
            throw new Error('Sorry, looks like something went wrong.')
        } else {
            const data = response.json();
            return data;
        }
    } catch(err) {
        return err;
    }
}

export {
    getCollection
}