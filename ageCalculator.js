/* Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year */

function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth 
 {return name + " is " + age + " years old."
}
}

console.log(ageCalculator("Ferdinand", 1988, 2015));