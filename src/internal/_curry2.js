import _isPlaceholder from './_isPlaceholder';
import _curry1 from './_curry1';

/**
 * Optimized internal two-arity curry function
 */
const _curry2 = fn => {
    return function f2(a, b) {
        switch(arguments.length) {
            case 0:
                return f2;
            case 1:
                return _isPlaceholder(a) ?
                       f2 : 
                       _curry1(_b => fn(a, _b));
            default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : 
                       _isPlaceholder(a) ?_curry1(_a => fn(_a, b)) :
                       _isPlaceholder(b) ? _curry1(_b => fn(a, _b)) : 
                       fn(a, b);
        }
    };
};

export default _curry2;