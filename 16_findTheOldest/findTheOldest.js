const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return currentAge > oldestAge ? person : oldest;
    });
};

function getAge(yearOfBirth, yearOfDeath) {
    const currentYear = new Date().getFullYear();
    const deathYear = yearOfDeath || currentYear;
    return deathYear - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
