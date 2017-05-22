const _isTransformer = obj => typeof obj['@@transducer/step'] === 'function';

export default _isTransformer;