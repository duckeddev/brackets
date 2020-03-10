module.exports = function check(str, bracketsConfig) {
    let stack = bracketsConfig.map(item => item.join(''));
    while (stack.some((el) => str.includes(el))) {
        stack.forEach((elem) => str = str.replace(elem, ""));
    }
    return !str;
}