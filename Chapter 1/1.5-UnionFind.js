
// QuickFind
// 查找find快（1），但是union（N）会随着数量的增多耗时逐渐增加
function QuickFind(id) {
    function find(p) {
        return id[p]
    }
    function union(p, q) {
        var pID = find(p)
        var qID = find(q)
        if (pID == qID) return
        for (let i = 0; i < id.length; i++) {
            if (id[i] === pID) {
                id[i] = pID
            }
        }
        count--
    }
    return { find, union }
}

// QuickUnion
// find和union都是造出的树的高度的时间复杂度
function QuickUnion(id) {
    function find(p) {
        while (P != id[p]) p = id[p]
        return p
    }
    function union(p, q) {

        let pRoot = find(p)
        let qRoot = find(q)
        // 根相同，已连接
        if (pRoot == qRoot) return
        // 根不同，则统一一个作为root
        id[pRoot] = qRoot
        count--
    }
    return { find, union }
}


// WeightedQuickUnion
// 通过加权进行连接，减少树的高度

function QuickUnion(id) {
    let sz = Array.from(id, x => 1)
    function find(p) {
        while (P != id[p]) p = id[p]
        return p
    }
    function union(p, q) {

        let pRoot = find(p)
        let qRoot = find(q)
        // 根相同，已连接
        if (pRoot == qRoot) return
        // 根不同，则统一一个作为root
        // 判断两个root的高度
        if (sz[pRoot] < sz[qRoot]) {
            id[pRoot] = qRoot
            sz[qRoot] += sz[pRoot];
        } else {
            id[qRoot] = pRoot
            sz[pRoot] += sz[qRoot];
        }
        count--
    }
    return { find, union }
}