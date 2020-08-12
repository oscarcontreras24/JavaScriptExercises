let findTheOldest = function(people) {
  let maxPerson = {};
  let oldest = people.reduce(function(maxYears, person) {
    // let maxYears = 0;
    console.log(maxYears);
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2020;
    }
    let yearsLived = person.yearOfDeath - person.yearOfBirth;
    console.log(yearsLived);
    if (maxYears < yearsLived) {
      maxYears = yearsLived;
      maxPerson = person;
      console.log(maxYears);
      console.log(maxPerson);
    }
    return maxYears;
  }, 0);
  return maxPerson;
}
/*
 use a sort array method to compare a and b move accodingly
 if the death date is missing put in 2020
 if (!person.deathdate) {
  person.deathdate = 2020;
}
*/
module.exports = findTheOldest
