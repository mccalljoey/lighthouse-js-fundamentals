/* Elementary School if age is below 13
Secondary School if age is between 13 and 18, both inclusive,
Lighthouse Labs in all other cases */

let age = 10 

const whichSchool = function(age) {
  if (age < 13){
  return "Elementary School";
  } else if (13 <= age && 18 >= age) {
  return "Secondary School";
  } else {
  return "Lighthouse Labs" }
}

console.log(whichSchool)