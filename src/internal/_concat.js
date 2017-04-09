const _concat = (set1 = [], set2 = []) => {
    let result = [];
    for (let i = 0; i < set1.length; i++) {
        result.push(set1[i]);
    }
    for (let j = 0; j < set2.length; j++) {
        result.push(set2[j]);
    }
    return result;
};

export default _concat;