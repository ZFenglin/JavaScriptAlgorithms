const { merge } = require('./2.2.1-Merge');

function t2BMergeSort(input) {
    return sort(input, 0, input.length - 1)
    // 递归从上向下不断拆分数组，再次调用sort
    function sort(arr, start, end) {
        if (end <= start) return
        let m = ((end - start) >> 1) + start
        sort(arr, start, m)
        sort(arr, m + 1, end)
        return merge(arr, start, m, end)
    }
}

console.log(t2BMergeSort([22, 3, 2, 3, 5, 3, 6]))