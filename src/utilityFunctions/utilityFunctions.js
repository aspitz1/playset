const makeUpperCase = (string) => {
    return string.split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(' ');
}

const makeCamelCase = (string) => {
    return string.split(' ')
        .map((word, i) => (i ? word[0].toUpperCase() : word[0].toLowerCase()) + word.substring(1).toLowerCase())
        .join('');
}

export {
    makeUpperCase,
    makeCamelCase
}