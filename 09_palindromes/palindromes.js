'use strict';

const palindromes = function(s) {
    // Sanity checks
    if (typeof s !== 'string' || s.length < 1) {
        return false;
    }
    // Eliminate casing differences
    s = s.toUpperCase();

    // Detect valid character code ranges
    const charCode0 = 48;
    const charCode9 = 57;
    const charCodeA = 65;
    const charCodeZ = 90;
    const inRange = function(charCode) {
        return (charCode >= charCode0 && charCode <= charCode9) ||
               (charCode >= charCodeA && charCode <= charCodeZ);
    };

    // Initialise comparison indices
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    let left, right;

    // Comparison loop
    while (leftIndex <= rightIndex) {
        // Skip over non alphanumeric characters
        do {
            left = s.charCodeAt(leftIndex);
            if (!left) {
                return false;
            }
            leftIndex++;
        } while (!inRange(left));
        do {
            right = s.charCodeAt(rightIndex);
            if (!right) {
                return false;
            }
            rightIndex--;
        } while (!inRange(right));

        if (left !== right) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
