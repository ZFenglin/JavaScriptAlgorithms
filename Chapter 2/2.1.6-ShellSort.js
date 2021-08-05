function shellSort(input) {
    let n = input.length;
    let h = 1;
    // 获取合适的h间隔
    while (h < n / 3) h = 3 * h + 1
    while (h >= 1) {
        // h间隔的插入排序
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h && input[j] < input[j - h]; j -= h) {
                [input[j], input[j - h]] = [input[j - h], input[j]]
            }
        }
        // 不断缩小间隔直到变为间隔为1的插入排序
        h = Math.floor(h / 3)
    }
    return input;
}