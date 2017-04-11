import _curry1 from './internal/_curry1';

const always = val => () => val;

export default _curry1(always);