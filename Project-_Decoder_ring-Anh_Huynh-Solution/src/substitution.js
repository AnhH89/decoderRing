// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {

    if (!alphabet || typeof alphabet !== "string" || alphabet.length !== 26) {
      return false;
    }

   
    const uniqueChars = new Set(alphabet);
    if (uniqueChars.size !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    if (encode) {

      input = input.toLowerCase();

      for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === " ") {
          
          result += " ";
        } else {
          const index = standardAlphabet.indexOf(char);
          result += alphabet[index];
        }
      }
    } else {
     
      for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === " ") {
        
          result += " ";
        } else {
          const index = alphabet.indexOf(char);
          result += standardAlphabet[index];
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };