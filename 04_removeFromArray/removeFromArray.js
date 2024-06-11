const removeFromArray = function removeFromArray(array, ...args) {
    const newArray = [];
    array.forEach((str) => {
        if (!args.includes(str)) {
            newArray.push(str)
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
