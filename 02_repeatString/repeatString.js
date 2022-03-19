const repeatString = function(string, num) {
    let stringFinal = string;
    for (i = 0; i < num-1; i++) {
        stringFinal += string;
    }
    return stringFinal;
};

// Do not edit below this line
module.exports = repeatString;
