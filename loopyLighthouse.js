/*If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number. 
Numbers 100 through 200
*/

let x = 100;

while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy")
  }
  else {
    console.log(x);
  }
  x = x + 1
}
