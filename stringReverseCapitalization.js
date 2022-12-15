const reverseCapitalization = (str) => {
  // create and empty
  let result = '';
// take a single letter
  for (let character of str) {
    // create new variable to update later
    let newChar = character;
    // if the character equals the uppercase version of it then it's uppercased already and we would change it to lower case and assign to the new character and 
    if (character.toUpperCase() === character) {
      newChar = character.toLowerCase();
    } else {
      // if it's not then it's lower case we need to change it to upper case and change the newChar
      newChar = character.toUpperCase();
    }
    //  after all checks done add changed letter to the result string -> loop to the next letter -> until none left exit
    result += newChar;
  }

  // result will contain whole string changed in the casing
  return result;
};

console.log(reverseCapitalization('hEEEEEllOOO iT'));
