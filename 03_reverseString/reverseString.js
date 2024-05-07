const reverseString = function(word) {
    const charArray = word.split("");
    charArray.reverse();
    let reversed = charArray.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
