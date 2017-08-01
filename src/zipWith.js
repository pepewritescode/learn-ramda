import _curry3 from './internal/_curry3';

const zipWith = (fn, a, b) => {
    let zipped = [];
    let index = 0;
    let len = Math.min(a.length, b.length);
    while (index < len) {
        zipped[index] = fn(a[index], b[index]);
        index += 1;
    };
    return zipped;
};

export default _curry3(zipWith);