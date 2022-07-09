/* 
Ejercicio #1:
Implemente una función que, dado un número entero positivo x, retorne true si x es un número palíndrome.

NOTA IMPORTANTE: IMPLEMENTAR ESTA FUNCIÓN SIN HACER CONVERSIÓN A STRING DEL NÚMERO.

Un número entero positivo es un palíndrome si se lee igual al derecho o al revés. Por ejemplo 121, 2442 o 123321 son palíndromes, mientras que 123, 244 o 122210 no son palíndromes. 

*/

const checkPalindrome = (x) => {
  let numArray = [];
  let units = 0;
  let remaining = x;
  // WHILE LOOP
  while (remaining !== 0) {
    units = remaining % 10
    remaining = (remaining - units)/10
    numArray.push(units);
  }
  let reverstArray = [...numArray].reverse()
  let index = numArray.length
  while (index !== 0) {
    if(numArray[index] !== reverstArray[index]){
      return false
    }
    index--
  }
  return true
}

const sample1 = 1111;
const sample2 = 45654;
const sample3 = 12345678;
const sample4 = 1234543210;
const sample5 = 5656565;

console.log(checkPalindrome(sample1));
console.log(checkPalindrome(sample2));
console.log(checkPalindrome(sample3));
console.log(checkPalindrome(sample4));
console.log(checkPalindrome(sample5));