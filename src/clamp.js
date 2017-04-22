import _curry3 from './internal/_curry3';

const clamp = (min, max, val) => {
    if (min > max) {
        throw new Error('min must not be greater than max in clamp(min, max, value).');
    }
    return val < min ? min :
           val > max ? max :
           val;
};

export default _curry3(clamp);