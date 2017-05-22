const _isArray = val => (
    val != null && 
    val.length >= 0 && 
    Object.prototype.toString.call(val) === '[object Array]'
);

export default Array.isArray || _isArray;