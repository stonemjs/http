export const isFunction = (value) => typeof value === 'function'
export const isString = (value) => typeof value === 'string' || value instanceof String
export const isClass = (value) => isFunction(value) && /^\s*class/.test(value.toString())
