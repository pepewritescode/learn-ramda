import _concat from './internal/_concat';
import _curry3 from './internal/_curry3';

const adjust = (fn, index, list) => {
    /**
     * `adjust` accepts both positive and negative index.
     * We need to check whether the passed index lies in
     * the list either from the front or the back.
     */
    if (index >= list.length || index < -list.length) {
        return list;
    }
    let start = index < 0 ? list.length : 0;
    // the actual index regardless of whether the passed index
    // is positive or negative
    let _index = start + index;
    let _list = _concat(list);
    _list[_index] = fn(list[_index]);
    return _list;
};

export default adjust;