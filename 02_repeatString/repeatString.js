const repeatString = function(string,num) {
    var newstring = '';
    for (i = 0; i < num; i++) {
        newstring = newstring + string;
    }
    
    if (num < 0) {
        newstring = 'ERROR'
    }

    return newstring
};

// Do not edit below this line
module.exports = repeatString;
