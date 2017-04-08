import _curry2 from './internal/_curry2';

const add = (a, b) => Number(a) + Number(b);

export default _curry2(add);