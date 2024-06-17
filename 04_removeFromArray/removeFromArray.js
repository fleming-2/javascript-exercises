const removeFromArray = function(array, ...toRemove) {
    return array.filter(function(elem) {
        return !toRemove.includes(elem);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
