const sumAll = function(start, end) {

    let finalSum = 0;

    for (i = start-1; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
