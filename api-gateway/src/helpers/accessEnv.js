// accesses a variable inside of process.env, throwing an error if it isn't found.
// always run this method in advance (i.e. upon initialization) so that the 
// error is thrown as early as possible.
// caching the values improves performance - accessing process.env many times is bad.

const cache = {};

const accessEnv = (key, defaultValue) => {
    if (!(key in process.env)) {
        if (defaultValue) return defaultValue;
        throw new Error(`${key} not found in process.env!`);
    }

    if (cache[key]) return cache[key];

    cache[key] = process.env[key];

    return cache[key];
}

export default accessEnv;