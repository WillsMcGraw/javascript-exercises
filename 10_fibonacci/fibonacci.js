const fibonacci = function(num) {
    if (parseInt(num, 10) === 0) {
        return 0;
    }
    else if (num < 0) {
        return 'OOPS';
    }

    prev = 1;
    curr = 1;

    for (let i = 3; i <= num; i++)
    {
        let temp = curr;

        curr = curr + prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
