exports.hello = (name = '') => {
    return `Hello ${name ? name : 'world'}`
}