const sumAll = function sumAll(min, max) {
    numArray = [];
    finalNum = 0;
    if (typeof(min) !== 'number' || typeof(max) !== 'number' || min < 0 || max < 0) {
        return "ERROR"
    }
    if (min > max) {
        var temp = 0;
        temp = min;
        min = max;
        max = temp;
    }
    for (i = min; i <= max; i++) {

        numArray.push(i);
    }
    numArray.forEach((num) => {
        finalNum = finalNum + num;
    })
    return finalNum;
    
};

// Do not edit below this line
module.exports = sumAll;
