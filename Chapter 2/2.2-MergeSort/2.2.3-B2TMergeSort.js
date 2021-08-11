const { merge } = require('./2.2.1-Merge');

function b2TMergeSort(input) {
    return sort(input, 0, input.length - 1)
    // 先拆分成长度为2的数组，在不断merge成完整的
    function sort(arr) {
        for (var sz = 1, len = arr.length; sz < len; sz = sz * 2) {
            for (var start = 0; start < len - sz; start += sz * 2) {
                arr = merge(arr, start, start + sz - 1, Math.min(start + sz * 2 - 1, len - 1));
            }
        }
        return arr;
    }
}

console.log(b2TMergeSort([22, 3, 2, 3, 5, 3, 6]))