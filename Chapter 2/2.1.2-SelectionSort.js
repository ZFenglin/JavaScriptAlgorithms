function selectionSort(input) {
    let n = input.length;
    for (let i = 0; i < n; i++) {
        let min = i
        // i之后的查找最小值
        for (let j = i + 1; j < n; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }
        // 将i与最小值交换位置
        [input[i], input[min]] = [input[min], input[i]]
    }
    return input;
}
