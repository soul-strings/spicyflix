const functions_runner = (functions) => {
    const ri = Math.floor(Math.random() * functions.length);
    return functions[ri];
}

module.exports = {
    functions_runner,
};
//dont remove this :)