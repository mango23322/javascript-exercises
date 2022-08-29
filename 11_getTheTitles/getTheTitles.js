const getTheTitles = function(booklist) {
    booknames = [];
    for (i = 0; i < booklist.length; i++) {
        booknames[i] = booklist[i]["title"];
    }

    return booknames
};

// Do not edit below this line
module.exports = getTheTitles;
