const removeFromArray = function() {
    
    const args = Array.from(arguments);
    let itemlist = args[0];

    for (let i = 1; i < args.length; i++) {
       // console.log(args[i]);
         for (let x = 0; x < itemlist.length; x++) {
         //   console.log(itemlist[x]);
            if (itemlist[x] === args[i]) {
                itemlist.splice(x, 1);
                x--;
         //       console.log(itemlist);
            }
        } 
    }

    return itemlist
};  

// Do not edit below this line
removeFromArray([1,2,3,4],3);

module.exports = removeFromArray;
