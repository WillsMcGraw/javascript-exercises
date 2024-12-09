const repeatString = function(str, num) {
    if (num < 0)
        return 'ERROR';
    
    let totalStr = ''
    for (let i = 0; i < num; i++)
    {
        totalStr += str;
    }

    return totalStr;
};

// Do not edit below this line
module.exports = repeatString;
