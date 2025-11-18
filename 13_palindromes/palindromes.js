const palindromes = function (word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = word
    .toLowerCase()
    .split('')
    .filter((character) => alphabet.includes(character))
    .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
