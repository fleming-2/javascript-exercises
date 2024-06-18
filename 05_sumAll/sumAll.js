const sumAll = function(rangeStart, rangeEnd) {
    if (rangeStart < 0 || rangeEnd < 0) {
        return 'ERROR';
    }
    if (typeof rangeStart !== 'number' || typeof rangeEnd !== 'number') {
        return 'ERROR';
    }

    // Enable working with ranges declared backwards
    if (rangeStart > rangeEnd) {
        let temp = rangeStart;
        rangeStart = rangeEnd;
        rangeEnd = temp;
    }

    let sum = 0;
    for(let i = rangeStart; i <= rangeEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
