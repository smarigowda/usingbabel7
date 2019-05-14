const testFunction = () => {
    console.log('[testFunction] function called...');
}
// default export
export default () => {
    debugger;
    console.log('[default export function] function called...');
    console.log('[default export function] Babel 7 ...yeeeyy...yarn link works with Babel 7 babel register....');
}
// named export
export {
    testFunction
}