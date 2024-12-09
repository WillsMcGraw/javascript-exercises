const reverseString = function(str) {
    const arr = [];
    for (let i = str.length - 1; i >= 0; i--)
    {
        arr.push(str.charAt(i));
    }

    let newStr = arr.join('');

    return newStr
};

// Do not edit below this line
module.exports = reverseString;
