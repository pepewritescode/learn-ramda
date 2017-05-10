import _curry2 from './internal/_curry2';
import _isNumber from './internal/_isNumber';

const range = (from, to) => {
    if (!(_isNumber(from) && _isNumber(to))) {
        throw new TypeError('Both arguments to range must be numbers.');
    }
    let result = [];
    let n = from;
    while (n < to) {
        result.push(n);
        n += 1;
    }
    return result;
};

export default _curry2(range);