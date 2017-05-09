import _curry2 from './internal/_curry2';

const min = (a, b) => b < a ? b : a;

export default _curry2(min);