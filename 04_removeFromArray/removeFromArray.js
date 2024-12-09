const removeFromArray = function(list, ...others) {
    const result = list.filter((entry) => !(others.includes(entry)));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
