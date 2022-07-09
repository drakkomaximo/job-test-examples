/* 
Ejercicio #2:
Implemente una función que, dado un string s, encuentre la longitud del substring más largo que no repite caracteres.

Ejemplos:

Entrada: s = "abcabcbb"
Salida: 3
Explicación: El substring más largo que no repite letras es "abc", que tiene una longitud de 3. También hay otros de longitud 3 como "bca", "cab", entre otros. De longitud 4 no hay.

Entrada: s = "bbbbb"
Salida: 1
Explicación: El substring más largo que no repite letras es "b", que tiene una longitud de 1.

Entrada: s = "pwwkew"
Salida: 3
Explicación: El substring más largo que no repite letras es "wke", que tiene una longitud de 3. No hay substrings de longitud 4 que no repitan letras.
Por ejemplo, "pwke" no es un substring, dado que los caracteres no son seguidos.

*/

const findDuplicates = (arrayLetter) => {
  let duplicados = [];

  const tempArray = [...arrayLetter].sort();

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicados.push(tempArray[i]);
    }
  }

  return duplicados.length > 0 ? true : false 
}

const substringMaxLength = (s) => {
  let arrayString = s.split('')
  let actualMaxLenght = 1

  arrayString.forEach((element, index) => {
    let subString = [element]
    let countIndex = index + 1
    let count = 1
    if (index !== (arrayString.length - 1)) {
      while ((arrayString[index] !== arrayString[countIndex]) && !findDuplicates(subString)) {
        count++
        subString.push(arrayString[countIndex])
        countIndex++
      }
    }
    actualMaxLenght = actualMaxLenght < count ? findDuplicates(subString) ? count - 1 : count : actualMaxLenght
  });

  return actualMaxLenght
}

const sample1 = 'abcabcbb';
const sample2 = 'bbbbb';
const sample3 = 'pwwkew';
const sample4 = 'yUIiUYrewq';

console.log(substringMaxLength(sample1));
console.log(substringMaxLength(sample2));
console.log(substringMaxLength(sample3));
console.log(substringMaxLength(sample4));