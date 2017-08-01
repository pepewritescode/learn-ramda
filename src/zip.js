import _curry2 from './internal/_curry2';

const zip = (a, b) => {
    let zipped = [];
    let index = 0;
    let len = Math.min(a.length, b.length);
    while (index < len) {
        zipped[index] = [a[index], b[index]];
        index += 1;
    }
    return zipped;
};

export default _curry2(zip);