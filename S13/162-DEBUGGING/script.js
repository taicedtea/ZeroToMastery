// const flattened = [[0,1], [2,3], [4,5]].reduce((a, b) => a.concat(b), []);
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => {
        debugger;
        return acc.concat(array)
}, []);

const o