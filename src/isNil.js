import _curry1 from './internal/_curry1';

// x == null will return true for both null and defined
const isNil = x => x == null;

export default _curry1(isNil);