import _curry1 from './internal/_curry1';
import _isNumber from './internal/_isNumber';
import isNil from './isNil';

const length = list => {
    return !isNil(list) && _isNumber(list.length) ? list.length : NaN;
};

export default _curry1(length);
