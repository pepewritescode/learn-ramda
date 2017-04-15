import _concat from './internal/_concat';
import _curry2 from './internal/_curry2';

const append = (el, list) => _concat(list, [el]);

export default _curry2(append);