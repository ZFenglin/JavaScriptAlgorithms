/**
 * 三数和为0
 */

// 三层循环 N^3
function threeSum(input) {
    var counter = 0
    for (var i = 0, len = input.length; i < len - 2; i++) {
        for (var j = i + 1; j < len - 1; j++) {
            for (var k = j + 1; k < len; k++) {
                if (input[i] + input[j] + input[k] == 0) {
                    counter++
                }
            }
        }
    }
    return counter;
}

// 最后一层改为二分查找 N^2logN
function threeSumFast(input) {
    input = input.sort()
    var counter = 0
    for (var i = 0, len = input.length; i < len - 2; i++) {
        for (var j = i + 1; j < len - 1; j++) {
            if (binarySearch(-input[i] - input[j], input) > j) {
                counter++;
            }
        }
    }
    return counter;
}