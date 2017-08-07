const _isRegExp = (x) => Object.prototype.toString.call(x) === '[object RegExp]';

export default _isRegExp;