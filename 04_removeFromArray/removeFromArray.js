const removeFromArray = function(array, target) {
    array.splice(array.indexOf(target), 1);
    console.log(array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
