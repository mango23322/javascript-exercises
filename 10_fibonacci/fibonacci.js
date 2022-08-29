const fibonacci = function(x) {
    let fib = [1,1];

    if (x < 0) {
        return 'OOPS'
    }
    for (i = 2; i < x; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[x-1];
};


// Do not edit below this line
module.exports = fibonacci;
