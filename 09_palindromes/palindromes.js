const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const clean_string = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversed_string = clean_string
        .split('')
        .reverse()
        .join('');

    return clean_string === reversed_string;
};

// Do not edit below this line
module.exports = palindromes;
