const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 > num2) {
        let ph = num1;
        num1 = num2;
        num2 = ph;
    } else if (num1 < 0 || num2 < 0) {
        console.log("ERROR");
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log("ERROR");
        return "ERROR";
    }

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
