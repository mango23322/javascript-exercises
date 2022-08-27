const reverseString = function(regstring) {
    var newstring = '';

    for (let i = 1; i <= regstring.length; i++) {
        newstring = newstring.concat(regstring.charAt(regstring.length - i));
    }

    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
