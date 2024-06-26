"use strict";

const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();

  // Calculate ages for each person
  let associatedAges = people.map(function(person) {
    return {
      person,
      age: (person.yearOfDeath ?? currentYear) - person.yearOfBirth,
    };
  });

  // Find oldest
  let oldest = associatedAges.reduce(function(currentOldest, candidate) {
    return (candidate.age > currentOldest.age) ? candidate : currentOldest;
  });

  return oldest.person;
};

// Do not edit below this line
module.exports = findTheOldest;
