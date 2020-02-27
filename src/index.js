exports.min = function min(array) {

    return !array || array.length < 1 ? 0 : sort(array).shift();
}

exports.max = function max(array) {
    return !array || array.length < 1 ? 0 : sort(array).pop();
}

exports.avg = function avg(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    array = array.reduce(function(sum, current) {
        return sum + current;
    }) / array.length;
    return array;
}

function sort(arr) {
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    return arr;
}