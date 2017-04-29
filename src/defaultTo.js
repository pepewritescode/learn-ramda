import _curry2 from './internal/_curry2';

/**
 * null == null => true
 * undefined == null => true
 * NaN !== NaN => true
 */
const defaultTo = (d, v) => v == null || v !== v ? d : v;

export default _curry2(defaultTo);