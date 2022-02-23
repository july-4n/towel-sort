
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    let arr = matrix.reduce((acc,elems, i) => {
        elems.sort((a,b) => (i % 2 === 0) ? a - b : b - a).map(e => acc.push(e));
        return acc;
    }, []);
    return arr;
}
