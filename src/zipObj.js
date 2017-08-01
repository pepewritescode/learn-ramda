import _curry2 from './internal/_curry2';

const zipObj = (keys, values) => {
    let zipped = {};
    let index = 0;
    let len = Math.min(keys.length, values.length);
    while (index < len) {
        zipped[keys[index]] = values[index];
        index += 1;
    }
    return zipped;
};

export default _curry2(zipObj);