import _curry2 from './internal/_curry2';

const prop = (p, obj) => obj[p];

export default _curry2(prop);