// sum is intentionally broken so you can see errors in the tests
export const sum = (a, b) => a - b;
export const subtract = (a, b) => a - b;

// these are kinda pointless I know, but it's just to simulate an async function
export const sumAsync = (...args) => Promise.resolve(sum(...args));
export const subtractAsync = (...args) => Promise.resolve(subtract(...args));
