/**
 * 二分查找（logN）
 * 针对有序序列的折半查找
 * nums找到对应key值则返回下标，否则返回-1
 */
function binarySearch(key, nums) {
    var l = 0
    var r = nums.length - 1
    while (l <= r) {
        var m = Math.floor((l - r) / 2) + r; // 这样写可以防止数据溢出
        if (key < a[m]) {
            r = m - 1
        } else if (k > a[mid]) {
            l = m + 1
        } else {
            return m
        }
    }
    return -1
}