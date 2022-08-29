const palindromes = function (input) {
    let newstring = '';
    let reverse = '';
 //   newstring = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    console.log(newstring);
    reverse = newstring.split("").reverse().join("");
   // console.log(reverse);
    if (newstring.toLowerCase() === reverse.toLowerCase) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
