function claculator(num1, num2, sign) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result;
    if (sign === "+") {
       result = num1 + num2
    }else if(sign === "-"){
        result = num1 - num2
    }else if (sign === "*"){
        result = num1 * num2
    }else if (sign === "/"){
        result = num1 / num2
    }else{
        result = "you select rong sign"
    }
    return result
}

module.exports = claculator
