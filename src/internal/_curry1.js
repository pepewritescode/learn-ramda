import _isPlaceholder from './_isPlaceholder';

/**
 * Optimized interal one-arity curry function
 */
const _curry1 = fn => {
    return function f1(a) {
        // If no argument has been supplied or if the supplied argument is
        // a placeholder, then return the curried function itself
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
        } else {
            return fn.apply(this, arguments);
        }
    };
};

export default _curry1;