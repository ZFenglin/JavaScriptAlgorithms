/**
 * 算数表达式求值算法
 * 利用两个栈对算数表达式进行计算
 * 遇见(不处理,)则从vals去除三个算式值进行计算
 */
function evaluate(input) {
    var i = 0
    var ops = []
    var vals = []
    while (i < input.length) {
        var item = input[i]
        switch (item) {
            case "+":
            case "-":
            case "*":
            case "/":
                ops.push(item);
                break
            case "(":
                break
            case ")":
                var a = vals.pop()
                var b = vals.pop()
                var opt = ops.pop()
                vals.push(eval(b + opt + a))
                break
            default:
                vals.push(item)
        }
        i++
    }
    return vals.pop()
}
