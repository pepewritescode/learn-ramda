import _curry2 from './internal/_curry2';

const max = (a, b) => b > a ? b : a;

export default _curry2(max);