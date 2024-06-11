const repeatString = function repeatString(str, num) {
    if (num<0) {
        return "ERROR";
    }
    var str2 = "";
    for(i=1; i<=num; i++) {str2 = str2+str}
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
