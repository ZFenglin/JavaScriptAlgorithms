
// QuickFind
function QuickFind() {

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
}