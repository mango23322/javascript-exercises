const sumAll = function(x, y) {
    xy = 0;
    //console.log(typeof(x));

    if (x < 0 || y < 0) {
        return 'ERROR'
    }
    if ( (typeof(x) != 'number') || (typeof(y) != 'number')) {
        return 'ERROR'
    }

    if (x < y ){
        while (x <= y) {
            xy += x;
            x++
        }    
    }
    else {
        while (y <= x) {
            xy += y;
            y++
        }   
    }

    return xy
};

// Do not edit below this line
sumAll(5,6);
module.exports = sumAll;
