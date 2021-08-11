function merge(arr, start, mid, end) {
    // 两数组中间有序，则整体有序
    if (arr[mid] <= arr[mid + 1]) return arr
    let i = start, j = mid + 1, tmp = []
    // 复制input至aux，不能使用push
    for (let k = start; k <= end; k++) {
        tmp[k] = arr[k]
    }
    // 归并回input
    for (let k = start; k <= end; k++) {
        // m前都处理完，直接插入j剩余
        if (i > mid) {
            arr[k] = tmp[j++]
            continue
        }
        // m后都处理完，直接插入i剩余
        if (j > end) {
            arr[k] = tmp[i++]
            continue
        }
        if (tmp[i] < tmp[j]) {
            arr[k] = tmp[i++]
        } else {
            arr[k] = tmp[j++]
        }
    }
    return arr
}

// let arr = [0, 2, 2, 3, 4, 1, 3, 7, 8, 9]
// let start = 0
// let end = arr.length - 1
// let mid = start + Math.floor((end - start) / 2)
// console.log(merge(arr, start, mid, end))

exports.merge = merge;