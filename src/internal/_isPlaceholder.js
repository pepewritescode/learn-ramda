const _isPlaceholder = value => {
    /*
    * a != null works for both null and undefined values
    */
    return value != null && 
           typeof value === 'object' &&
           value['@@functional/placeholder'] === true
};

export default _isPlaceholder;