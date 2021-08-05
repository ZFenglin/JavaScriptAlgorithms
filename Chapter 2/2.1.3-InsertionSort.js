function insertionSort(input) {
    let n = input.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && input[j] < input[j - 1]; j--) {
            [input[j], input[j - 1]] = [input[j - 1], input[j]]
        }
    }
    return input;
}
