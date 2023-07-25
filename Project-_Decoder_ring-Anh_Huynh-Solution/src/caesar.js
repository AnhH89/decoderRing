// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // If shift is not between -25 and 25 or if it's not a number, return false
    if (!shift || shift < -25 || shift > 25 || typeof shift !== "number") {
      return false;
    }


    if (!encode) {
      shift = shift * -1;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";


    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();

      if (alphabet.includes(char)) {
        let newIndex = alphabet.indexOf(char) + shift;


        if (newIndex < 0) {
          newIndex += 26;
        } else if (newIndex >= 26) {
          newIndex -= 26;
        }


        result += input[i] === char ? alphabet[newIndex] : alphabet[newIndex];
      } else {

        result += input[i];
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };